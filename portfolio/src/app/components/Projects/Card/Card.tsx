"use client";
import styles from "./Card.module.css";
import { useRef } from "react";
import { Project } from "../../../data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Card({
  title,
  description,
  src,
  link,
  github,
}: Project) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  return (
    <div ref={container} className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.titleContainer}>
          <h2>
            <span className={styles.projectText}>Project- {"   "}</span> {title}
          </h2>
        </div>

        <div className={styles.bodyContainer}>
          <div className={styles.descriptionContainer}>
            <p>{description}</p>
            <div className={styles.linkDiv}>
              <a href={link}>Link</a>
              <a href={github}>Github</a>
            </div>
          </div>
          <a href={link}>
            <div className={styles.imageContainer}>
              <motion.div style={{ scale }} className={styles.inner}>
                <Image
                  className={styles.cardImage}
                  src={`/${src}`}
                  alt="Project Image"
                  width={700}
                  height={500}
                />
              </motion.div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
