import styles from "./BlogContent.module.css";
import BlogHeader from "./BlogHeader";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export default function BlogContent(props) {
  const { blog } = props;
  const imagePath = `/images/blogs/${blog.slug}/${blog.image}`;

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={styles.image}>
            <Image
              src={`/images/blogs/${blog.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={350}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
  };

  return (
    <article className={styles.content}>
      <BlogHeader
        title={blog.title}
        image={imagePath}
        imageAlt={blog.imageAlt}
      />
      <ReactMarkdown components={customRenderers}>{blog.content}</ReactMarkdown>
    </article>
  );
}
