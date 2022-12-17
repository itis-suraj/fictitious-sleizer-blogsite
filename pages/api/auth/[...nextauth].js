import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPasskey } from "../../../lib/auth";
import { getClient } from "../../../lib/db";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const client = await getClient();
        const adminCreds = client.db().collection("adminCreds");
        const admin = await adminCreds.findOne({ userId: credentials.userId });
        if (!admin) {
          client.close();
          throw new Error("Incorrect UserID.");
        }
        const isAuth = await verifyPasskey(credentials.passkey, admin.passkey);
        if (!isAuth) {
          client.close();
          throw new Error("Incorrect Passkey");
        }
        client.close();
        return { userId: admin.userId };
      },
    }),
  ],
});
