import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../redux/actions";
import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleDeleteSearch = () => {
    setSearch("");
    dispatch(getCountries());
  };

  return (
    <nav className={styles.navbar}>
      <h1>Countries APP</h1>
      <button className={styles.button} onClick={handleDeleteSearch}>DELETE SEARCH</button>
      <ul className={styles.navbarMenu}>
        <li className={styles.navbarItem}>
          <Link to="/home" className={styles.h1}>
            HOME
          </Link>
        </li>

        <li className={styles.navbarItem}>
          <Link to="/activities" className={styles.h1}>
            CREATE ACTIVITY
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/about" className={styles.h1}>
            ABOUT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
