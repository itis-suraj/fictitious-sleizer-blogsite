import styles from "./HelloAdmin.module.css";
import { signOut } from "next-auth/react";
import { useReducer } from "react";
import MessageList from "./MessageList";
import ChangePassword from "./ChangePassword";

const reducerFn = (state, action) => {
  switch (action.type) {
    case "Messages":
      return { task: <MessageList /> };
    case "Change-Password":
      return { task: <ChangePassword /> };
  }
};

export default function HelloAdmin() {
  const [state, dispatchFn] = useReducer(reducerFn, { task: <MessageList /> });

  function logoutHandler() {
    signOut();
  }

  function messagesHandler() {
    dispatchFn({ type: "Messages" });
  }

  function changePasswordHandler() {
    dispatchFn({ type: "Change-Password" });
  }

  return (
    <section className={styles.box}>
      <nav className={styles.actions}>
        <button onClick={messagesHandler}>View Message</button>
        <button onClick={changePasswordHandler}>Change-Password</button>
        <button onClick={logoutHandler}>Sign Out</button>
      </nav>
      <main className={styles.display}>{state.task}</main>
    </section>
  );
}
