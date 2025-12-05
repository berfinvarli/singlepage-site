import React, { useEffect, useState } from "react";
import styles from "./AdminPanel.module.css";

export default function AdminPanel() {
  const [inbox, setInbox] = useState([]);
  const [archived, setArchived] = useState([]);

  const token = localStorage.getItem("adminToken");

  const fetchInbox = async () => {
    const res = await fetch("http://localhost:8080/api/admin/messages", {
      headers: { Authorization: `Bearer ${token}` }
    });
    setInbox(await res.json());
  };

  const fetchArchived = async () => {
    const res = await fetch("http://localhost:8080/api/admin/messages/archived", {
      headers: { Authorization: `Bearer ${token}` }
    });
    setArchived(await res.json());
  };

  const markAsRead = async (id) => {
    await fetch(`http://localhost:8080/api/admin/messages/${id}/read`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` }
    });

    fetchInbox();
    fetchArchived();
  };

  useEffect(() => {
    fetchInbox();
    fetchArchived();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Inbox</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Sent</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {inbox.map((m) => (
            <tr key={m.id}>
              <td>{m.name}</td>
              <td>{m.email}</td>
              <td>{m.message}</td>
              <td>{new Date(m.sentAt).toLocaleString()}</td>
              <td>
                <button onClick={() => markAsRead(m.id)}>✓</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1 style={{ marginTop: "40px" }}>Archived</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Sent</th>
          </tr>
        </thead>

        <tbody>
          {archived.map((m) => (
            <tr key={m.id}>
              <td>{m.name}</td>
              <td>{m.email}</td>
              <td>{m.message}</td>
              <td>{new Date(m.sentAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
