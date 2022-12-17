import { Fragment } from "react";
import AllBlogs from "../../components/blogs/AllBlogs";
import { extractAll } from "../../lib/blogs-util";
import Head from "next/head";

export default function AllBlogsPage(props) {
  const { allBlogs } = props;
  return (
    <Fragment>
      <Head>
        <title>All Blogs</title>
        <meta name="description" content="All my blogs are here." />
      </Head>
      <AllBlogs blogs={allBlogs} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allBlogs = extractAll();
  return {
    props: {
      allBlogs: allBlogs,
    },
  };
}
