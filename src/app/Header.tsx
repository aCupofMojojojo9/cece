import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>Community Empowerment</Link>
        <ul className={styles.menu}>
          <li><Link href="#our-story">Our Story</Link></li>
          <li><Link href="#what-we-do">What We Do</Link></li>
          <li><Link href="#get-involved">Get Involved</Link></li>
          <li><Link href="#our-team">Our Team</Link></li>
          <li><Link href="#contact-us">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}
