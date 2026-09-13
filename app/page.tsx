"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (typeof window === "undefined" || !window.location.search) {
      return;
    }

    router.replace(window.location.pathname);
  }, [router]);

  return (
    <main className={styles.page}>
      <div className={styles.texture} aria-hidden="true" />
      <header className={styles.header}>
        <Link
          className={styles.brand}
          href="/"
          aria-label="HarryCodeCraft home"
        >
          <span className={styles.brandMark}>HC</span>
          <span>HarryCodeCraft</span>
        </Link>
        <span className={styles.availability}>
          <span className={styles.statusDot} /> Building in public
        </span>
      </header>

      <section className={styles.intro}>
        <p className={styles.kicker}>A digital space by Harsh Singh</p>
        <h1>
          Pick a door.
          <br />
          <em>Start exploring.</em>
        </h1>
        <p className={styles.introCopy}>
          One place for the things I build, and the ideas I use to keep getting
          better at building them.
        </p>
      </section>

      <section className={styles.routes} aria-label="Explore HarryCodeCraft">
        <Link
          className={`${styles.routeCard} ${styles.portfolioCard}`}
          href="/portfolio"
        >
          <span className={styles.cardNumber}>01 / WORK</span>
          <span className={styles.cardIcon} aria-hidden="true">
            ↗
          </span>
          <span className={styles.cardVisual} aria-hidden="true">
            <Image
              src="/images/profile2.avif"
              alt=""
              width={520}
              height={260}
              priority
            />
            <span className={styles.visualLabel}>Selected work / 2026</span>
          </span>
          <span className={styles.cardBody}>
            <span className={styles.cardTitle}>Visit my portfolio</span>
            <span className={styles.cardDescription}>
              Software, systems, and digital products made with curiosity and
              care.
            </span>
            <span className={styles.cardLink}>
              See the work <span aria-hidden="true">→</span>
            </span>
          </span>
        </Link>

        <a
          className={`${styles.routeCard} ${styles.studyCard}`}
          href="https://thestudyroom.harrycodecraft.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.cardNumber}>02 / LEARNING</span>
          <span className={styles.cardIcon} aria-hidden="true">
            ↗
          </span>
          <span className={styles.studyVisual} aria-hidden="true">
            <span className={styles.studyGrid} />
            <span className={styles.studyStamp}>
              THE
              <br />
              STUDY
              <br />
              ROOM
            </span>
            <span className={styles.studyLine}>
              FOUNDATIONS → SYSTEMS → SHIP
            </span>
          </span>
          <span className={styles.cardBody}>
            <span className={styles.cardTitle}>Enter the study room</span>
            <span className={styles.cardDescription}>
              A practical map through DSA, projects, system design, and career
              growth.
            </span>
            <span className={styles.cardLink}>
              Start learning <span aria-hidden="true">→</span>
            </span>
          </span>
        </a>
      </section>

      <footer className={styles.footer}>
        <span>Software engineer · SaaS builder · Educator</span>
        <span>© {new Date().getFullYear()} HarryCodeCraft</span>
      </footer>
    </main>
  );
}
