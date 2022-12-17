import { hash, compare } from "bcryptjs";

export async function hashPasskey(passkey) {
  const hashedPasskey = await hash(passkey, 12);
  return hashedPasskey;
}

export async function verifyPasskey(passkey, hashedPasskey) {
  const isSame = await compare(passkey, hashedPasskey);
  return isSame;
}
