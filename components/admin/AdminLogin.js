import { useRef, useState } from "react";
import styles from "./AdminLogin.module.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function AdminLogin() {
  const router = useRouter();
  const [err, setErr] = useState();
  const userIdRef = useRef();
  const passkeyRef = useRef();

  const onCloseForm = () => {
    props.onClose();
  };

  async function loginHandler(e) {
    e.preventDefault();

    const enteredUserId = userIdRef.current.value;
    const enteredPasskey = passkeyRef.current.value;

    const res = await signIn("credentials", {
      redirect: false,
      userId: enteredUserId,
      passkey: enteredPasskey,
    });

    if (res.error) {
      setErr(`Status ${res.status}: ${res.error}`);
    }

    router.replace("/admin/messages");
    userIdRef.current.value = "";
    passkeyRef.current.value = "";
  }

  return (
    <div className={styles["form-box"]}>
      <form className={styles.form}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="username">User ID</label>
            <input id="username" type="text" ref={userIdRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="passkey">Pass Key</label>
            <input id="passkey" type="text" ref={passkeyRef} />
          </div>
        </div>
        <div className={styles.action}>
          <button onClick={loginHandler}>Login</button>
          <button onClick={onCloseForm}>Close</button>
        </div>
      </form>
      {err && <p>{err}</p>}
    </div>
  );
}
