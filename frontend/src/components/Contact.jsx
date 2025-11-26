import React, { useState } from "react";
import Spinner from "./Spinner"; 

const Contact = () => {
  const [name, setName] = useState("");
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
    if (message.length < 5) {
      setStatusMessage("Message must be at least 5 characters.");
      setIsError(true);
      return;
    }

    setIsLoading(true);
    setStatusMessage("");

    const contactData = { name, message };

    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        setStatusMessage("Message sent successfully!");
        setIsError(false);
        setName("");
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
      className="w-screen h-screen"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "12px",
            textAlign: "center",
          }}
        >
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
            style={{ padding: "8px", borderRadius: "4px", border: "1px solid #999" }}
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ padding: "8px", borderRadius: "4px", border: "1px solid #999" }}
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "8px",
              borderRadius: "4px",
              backgroundColor: isLoading ? "#999" : "#007bff",
              color: "#fff",
              cursor: isLoading ? "not-allowed" : "pointer",
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
