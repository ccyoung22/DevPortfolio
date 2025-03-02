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
        // animate={{
        //   y: -scrollY * 0.3,
        // }}
        // transition={{
        //   type: "spring",
        //   stiffness: 80,
        //   damping: 15,
        // }}
        >
          <h1 className={styles.title}>
            hi i'm <span className={styles.caitlin}>Caitlin</span>
          </h1>
        </motion.div>
        <motion.div
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
            FRONT END &#9965; WEB DEVELOPER <br />
            BASED &#9734; IN THE UK ;
            <br />
            <span className={styles.portText}>PORTFOLIO © 202</span>5 &#9825;
          </p>
        </motion.div>
      </section>
    </>
  );
}
