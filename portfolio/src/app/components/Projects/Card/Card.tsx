import styles from "./Card.module.css";
import { Project } from "../../../data";

export default function Card({
  title,
  description,
  src,
  link,
  github,
  colour,
}: Project) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card} style={{ backgroundColor: colour }}></div>
    </div>
  );
}
