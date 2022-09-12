import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.link}>home</a>
      </Link>
      <Link href="/about">
        <a className={styles.link}>about</a>
      </Link>
      <Link href="/users">
        <a className={styles.link}>users</a>
      </Link>
      <Link href="/characters">
        <a className={styles.link}>characters</a>
      </Link>
    </div>
  );
};

export default Navbar;
