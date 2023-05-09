import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryById } from "../redux/actions"
import style from "../styles/Detail.module.css";

const Detail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();// Se utiliza el hook useParams para obtener el id del país que se quiere mostrar.
    console.log(id)
    const country = useSelector((state) => state.detail);// Se utiliza el hook useSelector para obtener la información del país desde el estado global de la aplicación.
  
    useEffect(() => { // Se utiliza el hook useEffect para realizar una acción cuando se monta o se actualiza el componente.
      dispatch(getCountryById(id));  // Se despacha la acción que se encarga de obtener la información del país con el id especificado.
    }, [dispatch, id]); // Especifico que la acción se debe realizar cuando el id o el dispatch cambien.

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


 