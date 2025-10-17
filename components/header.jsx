import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.png";
import styles from "../styles/Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navItem}>
          Home
        </Link>

        <Link href="/portfolio-landing" className={styles.navItem}>
          Portfolio
        </Link>

        {/* Logo now takes up one grid column */}
        <Link href="/" className={[styles.logoLink, styles.navItem].join(' ')}>
          <Image src={logo} alt="Site logo" className={styles.logo} priority />
        </Link>

        <Link href="/resume" className={styles.navItem}>
          Résumé
        </Link>

        <Link href="/contact" className={styles.navItem}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
