import React from "react";

const MaintenanceNotice = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🚧 Site Under Maintenance 🚧</h1>
        <p style={styles.message}>
          We’re currently performing scheduled maintenance. <br />
          Please check back soon!
        </p>
        <p style={styles.footer}>Thank you for your patience</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f4f6f8",
  },
  card: {
    textAlign: "center",
    padding: "40px",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    maxWidth: "500px",
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#333",
  },
  message: {
    fontSize: "18px",
    color: "#555",
    lineHeight: "1.6",
  },
  footer: {
    marginTop: "30px",
    fontSize: "16px",
    color: "#777",
  },
};

export default MaintenanceNotice;
