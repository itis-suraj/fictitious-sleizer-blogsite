import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Admin from "../../components/admin/Admin";

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/");
      } else {
        setLoading(false);
      }
    });
  }, [router]);

  if (loading) return <p>Loading...</p>;
  return <Admin />;
}
