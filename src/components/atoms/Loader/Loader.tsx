import styles from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div data-testid="loader" className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
