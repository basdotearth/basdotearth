import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.innerWrapper}>
      <div className={styles.footerBlock}>
        <p className={styles.footerContent}>
          <span className={styles.footerBrand}>Bas Klinkhamer</span>
        </p>
        <p className={[styles.footerContent, styles.footerCopyright].join(' ')}>&copy; 2016 - Today</p>
      </div>
      <div className={styles.footerBlock}>
        <p className={styles.footerContent}>
          Coded with <span className={styles.beans}>🫘</span> while slowly evolving into Final Crab.
        </p>
        <p className={styles.footerContent}>Hello to Jason Isaacs and all Friends of DeSoto!</p>
      </div>
    </div>
  </footer>
);

export default Footer;
