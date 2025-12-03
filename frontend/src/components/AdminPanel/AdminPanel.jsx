import React, { useEffect, useState } from "react";
import styles from "./AdminPanel.module.css";

export default function AdminPanel() {
  const [messages, setMessages] = useState([]);

  const getToken = () => localStorage.getItem("adminToken");


  console.log("Token used for request:", getToken());

  const fetchMessages = async () => {
    const token = getToken();
    try {
      const res = await fetch("http://localhost:8080/api/admin/messages", {
  headers: { Authorization: `Bearer ${getToken()}` },
});


      if (!res.ok) throw new Error(`Failed: ${res.status}`);
      const data = await res.json();
      console.log("Fetched messages:", data);
      setMessages(data);
    } catch (err) {
      console.error("Error fetching messages:", err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Inbox Messages</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Sent At</th>
          </tr>
        </thead>
        <tbody>
          {messages.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No messages in inbox.
              </td>
            </tr>
          ) : (
            messages.map((msg) => (
              <tr key={msg.id}>
                <td>{msg.id}</td>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.message}</td>
                <td>{new Date(msg.sentAt).toLocaleString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
