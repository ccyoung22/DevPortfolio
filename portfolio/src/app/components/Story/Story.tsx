"use client";
// import { useScroll, useTransform } from "framer-motion";
// import { useEffect } from "react";
import styles from "./Story.module.css";

export default function Story() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.titleContainer}>
          <p>a bit about me</p>
        </div>
        <div className={styles.textContainer}>
          <br />
          <div className={styles.textHalf}>
            <div className={styles.textSection}>
              <p>
                Hi, {`I'm`} Caitlin! {`I’ve`} always loved making stuff. As a
                kid, the staff at my after-school club joked they had to stay
                late whenever I was in. {`I’d`} be busy drawing, painting, or
                crafting, leaving a trail of creative chaos behind me.
              </p>
            </div>
            <div className={styles.textSection}>
              <p>
                Not much changed as I got older. I applied my passion for
                drawing to an illustration degree, followed by a two-year
                animation {`Master's`} at the Royal College of Art. While
                studying, I started a side hustle selling vintage clothing to
                support myself. Living at my {`Mum’s`} on the outskirts of
                London, {`I’d`} cycle to the local car boot with a camping
                rucksack twice a week, load up on vintage finds, and spend the
                week photographing and selling them alongside my studies.
              </p>
            </div>
            <div className={styles.textSection}>
              <p>
                What started as a side hustle became my full-time job after my{" "}
                {`Master's`}. I ended up travelling the world sourcing vintage,
                opening a London shop, and even managing a small team. Running
                the business through six challenging years — COVID, Brexit, the
                cost of living crisis — taught me resilience, but after a while,
                I felt ready for a new adventure.
              </p>
            </div>
          </div>

          <div className={styles.textHalf}>
            <div className={styles.textSection}>
              <p>
                {`I’d`} always seen myself as more creative than technical, so
                coding {`wasn’t `} something I thought
                {` I’d `} be good at. But early last year, I got the opportunity
                to work closely with a web developer on a project and was
                fascinated by how creative the process was. Curious, I started
                learning HTML and CSS and loved it. I knew {`I’d `} found my
                next step.
              </p>
            </div>
            <div className={styles.textSection}>
              <p>
                I was lucky enough to be one of 40 people selected out of 2000
                applicants to join the School of Code bootcamp, a 16-week
                programme focused on both technical and problem-solving skills.{" "}
                {`It’s `} been a life-changing experience. {`I’ve `}
                explored new technologies, collaborated with amazing people, and
                realised how much {`it’s `} possible to learn in a short space
                of time with curiosity and hard work.
              </p>
            </div>

            <div className={styles.textSection}>
              <p>
                Far from being a weakness, {`I’ve `} found my creativity has
                been one of my biggest strengths in tech. Now, {`I'm `}
                excited to keep learning, building, and finding my place in the
                industry. I {`can’t `} wait to see where this new path takes me!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
