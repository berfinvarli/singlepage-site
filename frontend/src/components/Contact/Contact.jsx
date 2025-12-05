import React, { useState } from "react";
import Spinner from "../Spinner/Spinner";
import styles from "./Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.length < 2) {
      setStatusMessage("Name must be at least 2 characters.");
      setIsError(true);
      return;
    }
    if (!email.includes("@")) {
      setStatusMessage("Please enter a valid email.");
      setIsError(true);
      return;
    }
    if (message.length < 5) {
      setStatusMessage("Message must be at least 5 characters.");
      setIsError(true);
      return;
    }

    setIsLoading(true);
    setStatusMessage("");

    const contactData = { name, email, message };

    try {
      const response = await fetch(
        "http://localhost:8080/api/contact/messages",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contactData),
        }
      );

      if (response.ok) {
        setStatusMessage("Message sent successfully!");
        setIsError(false);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatusMessage("Failed to send message.");
        setIsError(true);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatusMessage("Error sending message. Check server.");
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact Us</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${styles.input} ${styles.subtitle}`}
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${styles.input} ${styles.subtitle}`}
          />

          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${styles.textarea} ${styles.subtitle}`}
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`${styles.button} ${styles.subtitle}`}
          >
            {isLoading && <Spinner size={18} color="#fff" />}
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>

        {statusMessage && (
          <p
            className={`${styles.status}  ${styles.subtitle} ${
              isError ? styles.error : styles.success
            }`}
          >
            {statusMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
