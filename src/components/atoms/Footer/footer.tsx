import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made by{" "}
      <a
        href="https://github.com/esatsma/kanye-quotes"
        target="blank"
        title="github"
        className={styles.link}
      >
        Lisette Atsma
      </a>
    </footer>
  );
};

export default Footer;
