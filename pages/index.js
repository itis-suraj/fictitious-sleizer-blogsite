import { Fragment } from "react";
import Hero from "../components/home-page/Hero";
import FeaturedBlogs from "../components/home-page/FeaturedBlogs";
import { extractFeatured } from "../lib/blogs-util";
import Head from "next/head";

export default function HomePage(props) {
  const { featuredBlogs } = props;

  return (
    <Fragment>
      <Head>
        <title>Fictitious Sleizer</title>
        <meta
          name="description"
          content="This is the home page. It displays post of current year and the very first post ever."
        />
      </Head>
      <Hero />
      <FeaturedBlogs featuredBlogs={featuredBlogs} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredBlogs = extractFeatured();
  return {
    props: {
      featuredBlogs: featuredBlogs,
    },
  };
}
