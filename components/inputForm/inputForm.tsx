"use client";
import styles from "./inputForm.module.css";
import axios from "axios";
import { useState } from "react";

export default function InputForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await axios.post("/api/subscribe", { email });
      if (res.status === 200) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.inputContainer}>
      <input
        className={styles.input}
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
        className={styles.ctaBtn}
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Joining..." : "Join Waitlist"}
      </button>

      {status === "success" && <p className={styles.success}>✅ Youre in!</p>}
      {status === "error" && (
        <p className={styles.error}>❌ Something went wrong.</p>
      )}
    </form>
  );
}
