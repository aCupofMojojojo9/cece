import React from 'react';
import styles from './contact.module.css';

export default function ContactPage() {
  return (
    <main className={styles.container}>
      <h1>Contact Us</h1>
      <form className={styles.form}>
        <label htmlFor="name" className={styles.label}>Name:</label>
        <input type="text" id="name" name="name" required className={styles.input} />

        <label htmlFor="email" className={styles.label}>Email:</label>
        <input type="email" id="email" name="email" required className={styles.input} />

        <label htmlFor="message" className={styles.label}>Message:</label>
        <textarea id="message" name="message" rows={4} required className={styles.textarea} />

        <button type="submit" className={styles.button}>Send</button>
      </form>
    </main>
  );
}
