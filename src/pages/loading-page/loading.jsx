// local
import styles from "./loading.module.css";

// ==================================================================================================================
function LoadingPage() {
return (
  <div className={styles.wrapper} role="status" aria-live="polite">
    <div className={styles.spinner}>
      <div className={styles.circle}></div>
    </div>
    <div className={styles.textWrap}>
      <span className={styles.title}>Loading</span>
      <span className={styles.dotPulse}>
        <b className={styles.dot} />
        <b className={styles.dot} />
        <b className={styles.dot} />
      </span>
    </div>
  </div>
);
}

export default LoadingPage;