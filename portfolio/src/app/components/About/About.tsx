"use client";
import styles from "./About.module.css";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const paragraph =
  "Hi, I’m Caitlin. For as long as I can remember, I’ve loved to create. Whether it’s through drawing, animation, building my own business, or more recently, software, I thrive on seeing a vision come to life.";

const words = paragraph.split(" ");

export default function About() {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.4", "start 0.25"],
  });

  return (
    <>
      <section className={styles.container}>
        <p className={styles.aboutText} ref={element}>
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} range={[start, end]} progress={scrollYProgress}>
                {word}
              </Word>
            );
          })}
        </p>
      </section>
    </>
  );
}

type WordProps = {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
};

const Word: React.FC<WordProps> = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className={styles.word}>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
