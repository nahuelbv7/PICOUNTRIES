import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarMenu}>
        <li className={styles.navbarItem}>
          <Link to="/home" className={styles.h1}>HOME</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/Activities" className={styles.h1}>ACTIVITIES</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/About" className={styles.h1}>ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;