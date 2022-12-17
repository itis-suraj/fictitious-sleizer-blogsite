import { Fragment } from "react";
import BlogContent from "../../components/blogs/blog-detail/BlogContent";
import { getBlogData, getBlogFiles } from "../../lib/blogs-util";
import Head from "next/head";

export default function BlogDetailPage(props) {
  const { blog } = props;
  return (
    <Fragment>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.excerpt} />
      </Head>
      <BlogContent blog={blog} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { slug } = context.params;
  const blog = getBlogData(slug);
  return {
    props: {
      blog: blog,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const blogFilenames = getBlogFiles();
  const slugs = blogFilenames.map((filename) => filename.replace(/\.md$/, ""));
  const pathParams = slugs.map((slug) => ({
    params: {
      slug: slug,
    },
  }));
  return {
    paths: pathParams,
    fallback: "blocking",
  };
}
