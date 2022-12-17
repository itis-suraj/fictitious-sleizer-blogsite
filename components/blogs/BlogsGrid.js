import BlogItem from "./BlogItem";
import styles from "./BlogsGrid.module.css";

export default function BlogsGrid(props) {
  const { blogs } = props;
  return (
    <ul className={styles.grid}>
      {blogs.map((blog) => (
        <BlogItem key={blog.slug} blog={blog} />
      ))}
    </ul>
  );
}
