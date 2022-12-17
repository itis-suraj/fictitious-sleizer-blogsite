import styles from "./AllBlogs.module.css";
import BlogsGrid from "./BlogsGrid";

export default function AllBlogs(props) {
  return (
    <section className={styles.posts}>
      <h1>All Blogs</h1>
      <BlogsGrid blogs={props.blogs} />
    </section>
  );
}
