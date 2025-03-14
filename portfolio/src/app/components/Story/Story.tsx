import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import styles from "./Story.module.css";

export default function Story() {
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start 0.95", "start 0.15"],
  });

  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size and update the isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600); // You can adjust this breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const y1 = useTransform(scrollYProgress, [0, 1], ["110%", "0%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["110%", "0%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["120%", "0%"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["200%", "0%"]);
  const y5 = useTransform(scrollYProgress, [0, 1], ["250%", "0%"]);
  const y6 = useTransform(scrollYProgress, [0, 1], ["300%", "0%"]);

  const lineHeight1 = useTransform(scrollYProgress, [0, 1], ["10vh", "2.8vh"]);
  const lineHeight2 = useTransform(scrollYProgress, [0, 1], ["8vh", "2.8vh"]);
  const lineHeight3 = useTransform(scrollYProgress, [0, 1], ["6vh", "2.8vh"]);
  const lineHeight4 = useTransform(scrollYProgress, [0, 1], ["5vh", "2.8vh"]);
  const lineHeight5 = useTransform(scrollYProgress, [0, 1], ["4vh", "2.8vh"]);
  const lineHeight6 = useTransform(scrollYProgress, [0, 1], ["4vh", "2.8vh"]);

  const letterSpacing = useTransform(scrollYProgress, [0, 1], ["2em", "0em"]);

  const titleY = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);
  const springY = useSpring(titleY, {
    stiffness: 300,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <>
      <section ref={titleRef} className={styles.container}>
        <motion.div
          style={{
            y: isMobile ? 0 : springY, // Disable scroll animation on mobile
            letterSpacing: isMobile ? 0 : letterSpacing, // Disable letter-spacing animation on mobile
          }}
          className={styles.titleContainer}
        >
          <p>a bit about me</p>
        </motion.div>

        <div className={styles.textContainer}>
          <br />

          <div className={styles.textHalf}>
            <div className={styles.textSection}>
              <motion.p
                style={{ y: isMobile ? 0 : y1, lineHeight: lineHeight1 }}
              >
                Hi, {`I'm`} Caitlin! {`I’ve`} always loved making stuff. As a
                kid, the staff at my after-school club joked they had to stay
                late whenever I was in. {`I’d`} be busy drawing, painting, or
                crafting, leaving a trail of chaos behind me.
              </motion.p>
            </div>
            <div className={styles.textSection}>
              <motion.p
                style={{ y: isMobile ? 0 : y2, lineHeight: lineHeight2 }}
              >
                Not much changed as I got older. I studied Illustration at
                university, followed by a {`Master's`} in Animation at the Royal
                College of Art. During my studies, I started selling vintage
                clothing—cycling to car boot sales with a camping rucksack,
                collecting finds, then photographing and selling them online.
              </motion.p>
            </div>
            <div className={styles.textSection}>
              <motion.p
                style={{ y: isMobile ? 0 : y3, lineHeight: lineHeight3 }}
              >
                What started as a side hustle became my full-time job after
                graduation. I got to travel the world sourcing vintage, opened a
                London shop, and at one point managed a small team. Navigating
                six challenging years through COVID, Brexit, and the cost of
                living crisis taught me resilience, but eventually, I craved a
                new direction.
              </motion.p>
            </div>
          </div>

          <div className={styles.textHalf}>
            <div className={styles.textSection}>
              <motion.p
                style={{ y: isMobile ? 0 : y4, lineHeight: lineHeight4 }}
              >
                {`I’d`} always seen myself as more creative than technical, but
                last year I worked closely with a web developer and was
                captivated by {`coding's`} creative aspects. I started learning
                HTML and CSS and immediately knew {`I'd`} found my next step.
              </motion.p>
            </div>
            <div className={styles.textSection}>
              <motion.p
                style={{ y: isMobile ? 0 : y5, lineHeight: lineHeight5 }}
              >
                Luckily, I managed to earn a place at School of Code, a 16-week
                programme focused on both technical and problem-solving skills.{" "}
                {`It’s `} been a life-changing experience. {`I’ve `} explored
                new technologies, collaborated with amazing people, and realised
                how much {`it’s `} possible to learn in a short space of time.
              </motion.p>
            </div>
            <div className={styles.textSection}>
              <motion.p
                style={{ y: isMobile ? 0 : y6, lineHeight: lineHeight6 }}
              >
                Far from being a weakness, {`I’ve `} found my creativity has
                been one of my biggest strengths in tech. Now, {`I'm `} excited
                to keep learning, building, and finding my place in the
                industry. I {`can’t `} wait to see where this new path takes me.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
