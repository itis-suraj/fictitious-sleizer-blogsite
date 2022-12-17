import BlogsGrid from "../blogs/BlogsGrid";
import styles from "./FeaturedBlogs.module.css";

export default function FeaturedBlogs(props) {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <BlogsGrid blogs={props.featuredBlogs} />
    </section>
  );
}
