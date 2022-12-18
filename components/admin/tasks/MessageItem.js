import styles from "./MessageItem.module.css";

export default function MessageItem(props) {
  const { id, email, name, comment } = props.item;

  return (
    <li>
      <div className={styles.card}>
        <div className={styles.visitor}>
          <p>{email}</p>
          <p>{name}</p>
        </div>
        <div className={styles.comment}>
          <p>{comment}</p>
        </div>
      </div>
    </li>
  );
}
