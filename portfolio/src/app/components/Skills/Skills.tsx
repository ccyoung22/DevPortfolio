import styles from "./Skills.module.css";
import { skills } from "../../skills";

export default function Skills() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.titleDiv}>
          <p>Tools In My Kit</p>
        </div>
        <div className={styles.skillsContainer}>
          {skills.map((skill: string, index: number) => {
            return (
              <div className={styles.skillItem} key={index}>
                {skill}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
