import styles from "../Story/Story.module.css";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Practice() {
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start 0.9", "start 0.2"],
  });

  const letterSpacing = useTransform(scrollYProgress, [0, 1], ["2em", "0em"]);

  const y1 = useTransform(scrollYProgress, [0, 1], ["110%", "0%"]);

  const lineHeight1 = useTransform(scrollYProgress, [0, 1], ["10vh", "3.1vh"]);

  return (
    <section className={styles.container}>
      <motion.div ref={titleRef} style={{ letterSpacing }}>
        <p>Hello Hi Hello Hi</p>
      </motion.div>
      <div className={styles.textSection}>
        <motion.p style={{ y: y1, lineHeight: lineHeight1, width: "200px" }}>
          Hi, {`I'm`} Caitlin! {`I’ve`} always loved making stuff. As a kid, the
          staff at my after-school club joked they had to stay late whenever I
          was in. {`I’d`} be busy drawing, painting, or crafting, leaving a
          trail of chaos behind me.
        </motion.p>
      </div>
    </section>
  );
}
