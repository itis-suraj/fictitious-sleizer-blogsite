import styles from "./HelloAdmin.module.css";
import { signOut } from "next-auth/react";

export default function HelloAdmin() {
  function logoutHandler() {
    signOut();
  }
  return (
    <section className={styles.box}>
      <nav className={styles.actions}>
        <button>View Message</button>
        <button>Change-Password</button>
        <button onClick={logoutHandler}>Sign Out</button>
      </nav>
      <main className={styles.display}></main>
    </section>
  );
}
