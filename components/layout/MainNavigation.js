import Link from "next/link";
import Logo from "./Logo";
import styles from "./MainNavigation.module.css";
import { signOut, useSession } from "next-auth/react";

export default function MainNavigation() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          {!session && !loading && (
            <li>
              <Link href="/admin">For Admin</Link>
            </li>
          )}
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          {!session && (
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          )}
          {session && (
            <li>
              <Link href="/admin/sleizer">Sleizer</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
