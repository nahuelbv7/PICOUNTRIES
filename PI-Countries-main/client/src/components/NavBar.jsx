import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";


const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      
      <h1>Countries APP</h1>
      
      <ul className={styles.navbarMenu}>
        <li className={styles.navbarItem}>
          <Link to="/home" className={styles.h1}>HOME</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/activities" className={styles.h1}>CREATE ACTIVITY</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/about" className={styles.h1}>ABOUT</Link>
        </li>
       </ul>
    </nav>
    
  );
};

export default NavBar;