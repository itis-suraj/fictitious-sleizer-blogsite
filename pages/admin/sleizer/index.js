import HelloAdmin from "../../../components/admin/tasks/HelloAdmin";
import { getSession } from "next-auth/react";

export default function Sleizer() {
  return <HelloAdmin />;
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
