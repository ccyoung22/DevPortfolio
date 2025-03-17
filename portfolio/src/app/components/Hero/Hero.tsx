"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section className={styles.container}>
        <motion.div
          className={styles.titleWrapper}
          animate={{
            y: -scrollY * 0.3,
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 15,
          }}
        >
          <h1 className={styles.title}>
            hi i&apos;m <span className={styles.caitlin}>Caitlin</span>
          </h1>
        </motion.div>
        <motion.div
          className={styles.descriptionWrapper}
          animate={{
            y: -scrollY * 0.7,
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 25,
          }}
        >
          <p className={styles.description}>
            FULL STACK ⛭ WEB DEVELOPER <br />
            FRONT END ☆ OBSESSED
            <br />
            <span className={styles.portText}>PORTFOLIO © 2025 &#9825;</span>
          </p>
        </motion.div>
      </section>
    </>
  );
}
