import ContactForm from "../components/contact/ContactForm";
import { Fragment } from "react";
import Head from "next/head";

export default function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta
          name="description"
          content="Share your views on any particular blog or on the site as a whole, or anything."
        />
      </Head>
      <ContactForm />
    </Fragment>
  );
}
