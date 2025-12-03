import React, { useState } from "react";
import Spinner from "../Spinner/Spinner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // input kontrolü
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "450px",
          padding: "30px",
          borderRadius: "10px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h2 style={{ fontSize: "26px", fontWeight: "bold", textAlign: "center" }}>
          Contact Us
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc", minHeight: "100px" }}
          />
          <button
            type="submit"
            disabled={isLoading}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px",
              borderRadius: "6px",
              backgroundColor: isLoading ? "#999" : "#1976d2",
              color: "#fff",
              cursor: isLoading ? "not-allowed" : "pointer",
              fontWeight: "bold",
              gap: "8px",
            }}
          >
            {isLoading && <Spinner size={18} color="#fff" />}
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
        {statusMessage && (
          <p
            style={{
              marginTop: "12px",
              color: isError ? "red" : "green",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {statusMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
