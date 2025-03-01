import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={styles.container}>
        <p>index</p>
        <p>about</p>
        <p>projects</p>
        <p>contact</p>
        <p>cv</p>
      </nav>
    </>
  );
}
