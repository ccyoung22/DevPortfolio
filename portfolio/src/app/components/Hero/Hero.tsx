import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <section className={styles.container}>
        <p className={styles.title}>Hi I'm Caitlin</p>
        <p>Web Dev, animator, cool cat</p>
      </section>
    </>
  );
}
