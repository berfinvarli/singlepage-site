import React, { useState } from "react";
import AdminPanel from "../AdminPanel/AdminPanel";
import styles from "./AdminSection.module.css";

export default function AdminSection() {
  const [isAdmin, setIsAdmin] = useState(!!localStorage.getItem("adminToken"));
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8080/api/auth/login?" + new URLSearchParams(loginData),
        { method: "POST" }
      );

      if (!response.ok) throw new Error("Invalid credentials");
      const token = await response.text();
      localStorage.setItem("adminToken", token);
      setIsAdmin(true);
      setLoginData({ username: "", password: "" });
      setLoginError("");
    } catch (err) {
      setLoginError("Invalid credentials");
      setIsAdmin(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsAdmin(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "40px 20px", backgroundColor: "#f2f2f2", minHeight: "70vh" }}>
      {isAdmin ? (
        <div className={styles.card} style={{ maxWidth: "900px" }}>
          <h2 className={styles.title}>Admin Panel</h2>
          <AdminPanel />
          <button onClick={handleLogout} className={`${styles.button} ${styles.logoutBtn}`} style={{ marginTop: "20px" }}>
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleLogin} className={styles.card}>
          <h2 className={styles.title}>Admin Login</h2>
          <input type="text" placeholder="Username" value={loginData.username}
            onChange={(e) => setLoginData({ ...loginData, username: e.target.value })} required className={styles.input} />
          <input type="password" placeholder="Password" value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} required className={styles.input} />
          <button type="submit" className={`${styles.button} ${styles.loginBtn}`}>Login</button>
          {loginError && <p style={{ color: "red", marginTop: "10px", fontWeight: "bold" }}>{loginError}</p>}
        </form>
      )}
    </div>
  );
}
