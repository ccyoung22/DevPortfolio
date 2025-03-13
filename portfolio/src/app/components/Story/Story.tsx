"use client";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import styles from "./Story.module.css";

export default function Story() {
  const { scrollYProgress } = useScroll();

  // Create transform animations for each paragraph
  const y1 = useTransform(scrollYProgress, [0.76, 0.87], ["80%", "0%"]);
  const y2 = useTransform(scrollYProgress, [0.78, 0.87], ["100%", "0%"]);
  const y3 = useTransform(scrollYProgress, [0.8, 0.87], ["120%", "0%"]);
  const y4 = useTransform(scrollYProgress, [0.82, 0.87], ["200%", "0%"]);
  const y5 = useTransform(scrollYProgress, [0.84, 0.87], ["250%", "0%"]);
  const y6 = useTransform(scrollYProgress, [0.86, 0.87], ["300%", "0%"]);

  // Create transform animations for lineHeight to spread the lines
  const lineHeight1 = useTransform(
    scrollYProgress,
    [0.76, 0.87],
    ["10vh", "3.1vh"]
  );
  const lineHeight2 = useTransform(
    scrollYProgress,
    [0.78, 0.87],
    ["8vh", "3.1vh"]
  );
  const lineHeight3 = useTransform(
    scrollYProgress,
    [0.8, 0.87],
    ["6vh", "3.1vh"]
  );
  const lineHeight4 = useTransform(
    scrollYProgress,
    [0.82, 0.87],
    ["5vh", "3.1vh"]
  );
  const lineHeight5 = useTransform(
    scrollYProgress,
    [0.84, 0.87],
    ["4vh", "3.1vh"]
  );
  const lineHeight6 = useTransform(
    scrollYProgress,
    [0.86, 0.87],
    ["4vh", "3.1vh"]
  );

  // Title animation
  const titleY = useTransform(scrollYProgress, [0.76, 0.87], ["15%", "0%"]);
  const springY = useSpring(titleY, {
    stiffness: 300,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <>
      <section className={styles.container}>
        <motion.div style={{ y: springY }} className={styles.titleContainer}>
          <p>a bit about me</p>
        </motion.div>

        <div className={styles.textContainer}>
          <br />

          {/* First half of the text */}
          <div className={styles.textHalf}>
            <div className={styles.textSection}>
              <motion.p style={{ y: y1, lineHeight: lineHeight1 }}>
                Hi, {`I'm`} Caitlin! {`I’ve`} always loved making stuff. As a
                kid, the staff at my after-school club joked they had to stay
                late whenever I was in. {`I’d`} be busy drawing, painting, or
                crafting, leaving a trail of chaos behind me.
              </motion.p>
            </div>
            <div className={styles.textSection}>
              <motion.p style={{ y: y2, lineHeight: lineHeight2 }}>
                Not much changed as I got older. I applied my passion for
                drawing to an illustration degree, followed by an animation{" "}
                {`Master's`} at the Royal College of Art. While studying, I
                started a side hustle selling vintage clothing to support
                myself.
                {` I’d`} cycle to the local car boot with a camping rucksack
                twice a week, load up on vintage finds, and spend the week
                photographing and selling them.
              </motion.p>
            </div>
            <div className={styles.textSection}>
              <motion.p style={{ y: y3, lineHeight: lineHeight3 }}>
                What started as a side hustle became my full-time job after my{" "}
                {`Master's`}. I got to travel the world sourcing vintage, opened
                a London shop, and at one point managed a small team. Running
                the business through six challenging years — COVID, Brexit, the
                cost of living crisis — taught me resilience, but after a while,
                I felt ready for a new adventure.
              </motion.p>
            </div>
          </div>

          {/* Second half of the text */}
          <div className={styles.textHalf}>
            <div className={styles.textSection}>
              <motion.p style={{ y: y4, lineHeight: lineHeight4 }}>
                {`I’d`} always seen myself as more creative than technical, so
                coding {`wasn’t `} something I thought {` I’d `} be good at. But
                early last year, I got the opportunity to work closely with a
                web developer on a project and was fascinated by how creative
                the process was. Curious, I started learning HTML and CSS and
                loved it. I knew {`I’d `} found my next step.
              </motion.p>
            </div>
            <div className={styles.textSection}>
              <motion.p style={{ y: y5, lineHeight: lineHeight5 }}>
                I was lucky enough to be one of 40 people selected out of 2000
                applicants to join the School of Code bootcamp, a 16-week
                programme focused on both technical and problem-solving skills.{" "}
                {`It’s `} been a life-changing experience. {`I’ve `} explored
                new technologies, collaborated with amazing people, and realised
                how much {`it’s `} possible to learn in a short space of time.
              </motion.p>
            </div>
            <div className={styles.textSection}>
              <motion.p style={{ y: y6, lineHeight: lineHeight6 }}>
                Far from being a weakness, {`I’ve `} found my creativity has
                been one of my biggest strengths in tech. Now, {`I'm `} excited
                to keep learning, building, and finding my place in the
                industry. I {`can’t `} wait to see where this new path takes me!
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
