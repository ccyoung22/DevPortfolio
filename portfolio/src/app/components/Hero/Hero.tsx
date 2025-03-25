"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const sectionRef = useRef(null);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["curious", "collaborative", "creative", "Caitlin."];

  useEffect(() => {
    const intervalDuration = wordIndex === 3 ? 1000 : 500; // 'it.' stays for 1 second, others 0.5 seconds
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [wordIndex, words.length]);

  // Use a single scroll progress for the entire section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Create dramatically different transform values for title and description
  // Title moves much faster and further than description
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const descriptionY = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <>
      <section ref={sectionRef} className={styles.container}>
        <motion.div
          className={styles.titleWrapper}
          style={{ y: titleY }}
          initial={{ y: 0 }}
        >
          <h1 className={styles.title}>
            hi {`i'm`}{" "}
            <span className={styles.caitlin}>{words[wordIndex]}</span>
          </h1>
        </motion.div>
        <motion.div
          className={styles.descriptionWrapper}
          style={{ y: descriptionY }}
          initial={{ y: 0 }}
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
