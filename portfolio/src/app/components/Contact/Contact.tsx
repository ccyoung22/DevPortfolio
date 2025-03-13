import styles from "./Contact.module.css";
import Image from "next/image";

export default function Contact() {
  return (
    <section className={styles.container}>
      <div className={styles.stickyFooter}>
        <div className={styles.contentContainer}>
          <p className={styles.titleText}>
            {`i'd`} love <br />
            to chat
          </p>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>
              BASED &#9734; IN THE UK
              <br />
              <span className={styles.portText}>PORTFOLIO © 202</span>5 &#9825;
            </p>
          </div>
          <div className={styles.contactText}>
            <p className={styles.bioText}>
              {`I’m`} actively looking for new opportunities. If {`you’re`} in
              the market for a developer or designer, {`I’d`} love to hear from
              you{" "}
            </p>
            <div className={styles.contactDetails}>
              <a
                href="https://www.linkedin.com/in/caitlin-young-4544a5226/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/linked-in-logo.png"
                  alt="GitHub Icon"
                  width={20}
                  height={20}
                  className={styles.icon}
                />
              </a>
              <p>Caitlin Young</p>
            </div>
            <div className={styles.contactDetails}>
              <a
                href="https://github.com/ccyoung22"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/github-icon.png"
                  alt="GitHub Icon"
                  width={20}
                  height={20}
                  className={styles.icon}
                />
              </a>
              <p>ccyoung22</p>
            </div>
            <div className={styles.contactDetails}>
              <Image
                src="/emailIcon.png"
                alt="GitHub Icon"
                width={20}
                height={20}
                className={styles.icon}
              />

              <p>caitlincnyoung@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
