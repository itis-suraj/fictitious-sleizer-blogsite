import styles from "./MessageList.module.css";
import MessageItem from "./MessageItem";

const DUMMY_COMMENTS = [
  {
    id: "abcd",
    email: "bot.one@test.com",
    name: "Bot One",
    comment: "This is one nice effort from a beginner.",
  },
  {
    id: "pqrs",
    email: "bot.two@test.com",
    name: "Bot Two",
    comment:
      "My city's library website is very un-friendly. Can you make them?",
  },
  {
    id: "wxyz",
    email: "bot.three@test.com",
    name: "Bot Three",
    comment:
      "I love to read your blogs. They don't make sense. But it's excerpt is catchy",
  },
];

export default function MessageList() {
  return (
    <div className={styles.box}>
      <ul>
        {DUMMY_COMMENTS.map((item) => (
          <MessageItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

// export async function getServerSideProps() {}
