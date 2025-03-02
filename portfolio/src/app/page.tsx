"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import styles from "./page.module.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Story from "./components/Story/Story";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    lenis.on("scroll", (e) => {
      console.log(e); // For example, you can log scroll events
    });
  }, []);

  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.heroContainer}>
        <Hero />
      </section>
      <section className={styles.aboutContainer}>
        <About />
      </section>
      <section className={styles.projectsContainer}>
        <Projects />
      </section>
      <section className={styles.skillsContainer}>
        <Skills />
      </section>
      <section className={styles.storyContainer}>
        <Story />
      </section>
      <section className={styles.contactContainer}>
        <Contact />
      </section>
    </main>
  );
}
