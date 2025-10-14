import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Navigation.module.css";

export default function NavigationPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Explore My Work</h1>
      <div className={styles.grid}>

        <Link href="/traditional" className={styles.tile}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/traditional.jpg"
              alt="Traditional Art"
              fill
              className={styles.tileImage}
            />
          </div>
          <div className={styles.overlay}>
            <h2>Traditional Art</h2>
            <p>Oil, charcoal, and pencil works</p>
          </div>
        </Link>

        <Link href="/photography" className={styles.tile}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/photography.jpg"
              alt="Photography"
              fill
              className={styles.tileImage}
            />
          </div>
          <div className={styles.overlay}>
            <h2>Photography</h2>
            <p>Moments captured through the lens</p>
          </div>
        </Link>

        <Link href="/digital" className={styles.tile}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/digital.jpg"
              alt="Digital Art"
              fill
              className={styles.tileImage}
            />
          </div>
          <div className={styles.overlay}>
            <h2>Digital Art</h2>
            <p>Paintings and illustrations created digitally (never AI, no photo bashing)</p>
          </div>
        </Link>

        <Link href="/sketchbook" className={styles.tile}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/sketchbook.jpg"
              alt="Sketchbook"
              fill
              className={styles.tileImage}
            />
          </div>
          <div className={styles.overlay}>
            <h2>Sketchbook</h2>
            <p>Rough ideas, studies, and visual experiments</p>
          </div>
        </Link>

      </div>
    </div>
  );
}
