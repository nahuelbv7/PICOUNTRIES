import React from 'react';
import { Link } from 'react-router-dom';
import style from "../styles/LandingPage.module.css"

const LandingPage = () => {
  return (
    <div className={style.landing}>
   <div className={style.div}>
    <Link to="/home">
    <button className={style.button}>Explore</button>
    </Link>
   </div>
   </div>
  );
};

export default LandingPage;