import { useRef, useState, useEffect } from "react";
import styles from "./ContactForm.module.css";
import Notification from "../ui/Notification";

async function sendContactData(messageData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(messageData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

export default function ContactForm() {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const [status, setStatus] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus(null);
        setError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  async function sendMessageHandler(e) {
    e.preventDefault();

    setStatus("pending");

    const enteredEmail = emailRef.current.value;
    const enteredName = nameRef.current.value;
    const enteredMessage = messageRef.current.value;

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setStatus("success");

      emailRef.current.value = "";
      nameRef.current.value = "";
      messageRef.current.value = "";
    } catch (error) {
      setError(error.message);
      setStatus("error");
    }
  }

  let notification;

  if (status === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }

  if (status === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }

  if (status === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: error,
    };
  }

  return (
    <section className={styles.contact}>
      <h1>Yes..?</h1>
      <form className={styles.form} onSubmit={sendMessageHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required ref={nameRef} />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="5" required ref={messageRef} />
        </div>
        <div className={styles.actions}>
          <button>Send</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}
