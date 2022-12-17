import styles from "./BlogHeader.module.css";
// import Link from "next/link";
import Image from "next/image";

export default function BlogHeader(props) {
  const { title, image, imageAlt } = props;

  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <Image src={image} alt={imageAlt} width={200} height={150} />
    </header>
  );
}
