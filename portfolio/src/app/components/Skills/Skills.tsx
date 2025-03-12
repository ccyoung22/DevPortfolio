"use client";
import styles from "./Skills.module.css";
import { skills } from "../../skills";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SkillItemProps {
  skill: string;
  index: number;
}

export default function Skills() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);

  const titleDelay = 0.5 + (skills.length - 1) * 0.08 + 0.5;

  const isContainerInView = useInView(containerRef, {
    once: false,
    amount: 0.1,
  });

  return (
    <>
      <section className={styles.container}>
        <motion.div
          className={styles.titleDiv}
          ref={titleRef}
          initial={{ opacity: 0, y: -80 }}
          animate={
            isContainerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -80 }
          }
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 12,
            delay: isContainerInView ? titleDelay : 0,
          }}
        >
          <p className={styles.titleText}>tools in my kit</p>
        </motion.div>
        <div className={styles.skillsContainer} ref={containerRef}>
          {skills.map((skill, index) => (
            <SkillItem key={index} skill={skill} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}

function SkillItem({ skill, index }: SkillItemProps) {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(itemRef, {
    once: false,
    amount: 0.2,
  });

  const delay = index * 0.08;

  return (
    <motion.div
      ref={itemRef}
      className={styles.skillItem}
      animate={isInView ? { scale: 1 } : { scale: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: isInView ? delay : 0,
      }}
    >
      {skill}
    </motion.div>
  );
}
