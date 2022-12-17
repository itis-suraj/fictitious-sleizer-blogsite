import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/sleizer.jpg"
          alt="Sleizer's Profile Photo"
          width={300}
          height={300}
        />
      </div>
      <h1>Fictitious Sleizer</h1>
      <p>I blog anything...</p>
    </section>
  );
}
