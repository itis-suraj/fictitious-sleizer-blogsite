import styles from "./ChangePassword.module.css";

export default function ChangePassword() {
  return (
    <form className={styles.form}>
      <div className={styles.old}>
        <label htmlFor="old-passkey">Old Passkey</label>
        <input type="password" id="old-passkey" required />
      </div>
      <div className={styles.new}>
        <label htmlFor="new-passkey">New Passkey</label>
        <input type="password" id="new-passkey" required />
      </div>
      <div className={styles.confirm}>
        <button>Confirm</button>
      </div>
    </form>
  );
}
