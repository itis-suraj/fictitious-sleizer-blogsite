import MessagesList from "../../components/admin/tasks/MessagesList";
import { getSession } from "next-auth/react";

export default function Messages() {
  return <MessagesList />;
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
