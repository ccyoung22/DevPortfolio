import { motion } from "framer-motion";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <section className={styles.container}>
        <h1 className={styles.title}>
          hi i'm <span className={styles.caitlin}>Caitlin</span>
        </h1>
        <p className={styles.description}>
          FRONT END WEB DEVELOPER <br />
          BASED IN THE UK <br />
          <span className={styles.portText}>PORTFOLIO © 202</span>5
        </p>
      </section>
    </>
  );
}
