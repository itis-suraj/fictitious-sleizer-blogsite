import styles from "./Admin.module.css";
import AdminLogin from "./AdminLogin";
import { useState } from "react";

export default function Admin() {
  const [formOpen, setFormOpen] = useState(false);

  const openLoginForm = () => {
    setFormOpen(true);
  };

  const closeLoginForm = () => {
    setFormOpen(false);
  };

  return (
    <section>
      <div className={styles.message}>
        <h1>:: NOTE ::</h1>
        <p>
          This page and the pages following success login are meant only for
          admin(/Sleizer) to read the messages and react to it.
        </p>
        <button onClick={openLoginForm}>I am Admin</button>
      </div>
      {formOpen && <AdminLogin onClose={closeLoginForm} />}
    </section>
  );
}
