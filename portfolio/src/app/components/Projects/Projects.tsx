import styles from "./Projects.module.css";
import { projects } from "../../data";
import Card from "./Card/Card";

export default function Projects() {
  return (
    <>
      <div className={styles.container}>
        {projects.map((projects, index) => {
          return <Card key={index} {...projects} />;
        })}
      </div>
    </>
  );
}
