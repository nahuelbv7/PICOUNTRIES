import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryById } from "../redux/actions"
import style from "../styles/Detail.module.css";

const Detail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id)
    const country = useSelector((state) => state.detail);
  
    useEffect(() => {
      dispatch(getCountryById(id));  
    }, [dispatch, id]);

    return (
      <div className={style.detail}>
      <div key={country.id} className={style.container}>
        <img src={country.flag} alt={country.flag} className={style.flag} />
        <div className={style.info}>
          <h1 className={style.name}>{country.name} </h1>
          <h3 className={style.h3}>Continent: {country.continent}</h3>
          <h3 className={style.h3}>Capital: {country.capital}</h3>
          <h3 className={style.h3}>Subregion: {country.subregion}</h3>
          <h3 className={style.h3}>Area: {country.area} km2</h3>
          <h3 className={style.h3}>Poblation: {country.poblation}</h3>
        </div>
      </div>
      </div>
    );
};

export default Detail;


 