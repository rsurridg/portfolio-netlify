// =========================
// Next.js Landing Page (CSS Modules version)
// Files:
//   app/page.jsx           (or pages/index.jsx)
//   app/Landing.module.css (or pages/Landing.module.css)
// -------------------------
// If you use the Pages Router, remove the `metadata` export.
// Replace placeholders like name, social links, and images.
// =========================

// app/page.jsx
export const metadata = {
  title: "Home — Your Name",
  description: "Portfolio & projects by Your Name — software engineer and artist.",
};

import styles from "../styles/Home.module.css";

export default function LandingPage() {
  return (
    <main className={styles.site}>

      {/* Banner (image/video background + centered quote) */}
      <section className={styles.banner} aria-label="Inspirational banner">
          <div className={styles.bannerMedia}>
          </div>
          <div className={styles.bannerOverlay} />
          <div className={styles.bannerInner}>
          <blockquote className={styles.bannerQuote}>
            <p>“The sweetest thing in all my life has been the longing - to find the place where all the beauty came from. - C.S. Lewis”</p>
          </blockquote>
        </div>
      </section>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroText}>
            <span className={styles.badge}><span className={styles.badgeDot} />Available for projects</span>
            <h1 className={styles.h1}>Creating at the intersection.</h1>
            <p className={styles.lede}>
              I’m <strong>Rachel</strong> — a software engineer, artist, writer, and aspiring cowgirl in Houston, TX. I'm interested in celebrating stories, and helping you tell yours.
            </p>
            <div className={styles.ctaRow}>
              <a href="#work" className={styles.buttonPrimary}>See my work</a>
              <a href="#contact" className={styles.buttonGhost}>Get in touch</a>
            </div>
            <div className={styles.techStack}>Code: Fullstack Web Dev • JavaScript • Custom Elements • HTML • CSS • C++ </div>
            <div className={styles.techStack}>Art: Graphite • Oil • Charcoal • Digital</div>
            <div className={styles.techStack}>The Intersection: Lightroom • Photoshop • Premiere Pro • Procreate • Instagram </div>
          </div>
          <div className={styles.heroMedia}>
            <div className={styles.mediaFrame}>
              <img src="../images/hero.jpg" alt="Featured preview" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className={styles.section}>
        <div className={styles.featuresGrid}>
          {[
            {k:"Performance", v:"Lighthouse 95+ targets by default"},
            {k:"Accessibility", v:"WCAG‑minded components & flows"},
            {k:"Design", v:"Tasteful visuals with restraint"},
            {k:"Maintainability", v:"Clear structure, fewer surprises"},
          ].map((f) => (
            <div key={f.k} className={styles.featureCard}>
              <div className={styles.featureK}>{f.k}</div>
              <div className={styles.featureV}>{f.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Work grid */}
      <section id="work" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.h2}>Selected work</h2>
          <a href="/portfolio" className={styles.linkSubtle}>View all →</a>
        </div>
        <div className={styles.workGrid}>
          {[1,2,3,4,5,6].map((i) => (
            <a key={i} href={`/work/${i}`} className={styles.workItem}>
              <div className={styles.workThumb}>
                <img src={`/work-${i}.jpg`} alt={`Project ${i}`} />
              </div>
              <div className={styles.workMeta}>
                <div>
                  <div className={styles.workTitle}>Project Title {i}</div>
                  <div className={styles.workSub}>Next.js • UI • 2025</div>
                </div>
                <span className={styles.arrow}>→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={styles.sectionNarrow}>
        <div className={styles.centerText}>
          <h3 className={styles.h3}>Let’s build something great</h3>
          <p className={styles.copy}>Drop a line about your project, timeline, and goals. I’ll get back within 24 hours.</p>
        </div>
        <form action="https://formspree.io/f/yourid" method="POST" className={styles.form}>
          <div className={styles.formRowTwo}>
            <input required name="name" placeholder="Your name" className={styles.input} />
            <input required type="email" name="email" placeholder="Email" className={styles.input} />
          </div>
          <input name="company" placeholder="Company (optional)" className={styles.input} />
          <textarea required name="message" rows={5} placeholder="Tell me a bit about your project…" className={styles.textarea} />
          <button className={styles.buttonPrimary}>Send message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p>© {new Date().getFullYear()} Your Name</p>
          <div className={styles.footerLinks}>
            <a href="https://instagram.com/merakiae.art">Instagram</a>
            <a href="https://github.com/yourhandle">GitHub</a>
            <a href="mailto:you@domain.com">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
