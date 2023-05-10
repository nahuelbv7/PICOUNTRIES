import { useDispatch } from "react-redux";
import style from "../styles/VerticalNav.module.css"
import { searchCountry, orderCountries, filterPopulation,  fetchActivities, filterActCountry } from "../redux/actions"
import { SearchBar } from "./SearchBar";
import onuLogo from "../images/arg.gif";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const VerticalNav = () => {
  const dispatch = useDispatch();

  // Obtenemos las actividades turisticas desde el estado global con el hook useSelector
  const activities = useSelector((state) => state.activities);

  // Utilizamos useEffect para hacer una llamada al backend y obtener las actividades turisticas
    useEffect(() => {
      dispatch(fetchActivities());    // Llamada al backend para obtener las actividades
    }, [dispatch]);                   // Indicamos que se ejecute cada vez que se actualiza el estado de dispatch
    console.log(activities)
    


  // Funcion para ordenar los paises  
  const handleOrder = (e) => {
    const { value } = e.target;
    dispatch(orderCountries(value));     // Llamamos a la accion orderCountries con el valor seleccionado
  };


  // Funcion para filtrar por continente
  const filterContinent = (e) => {
    const continent = e.target.value;
    if (continent === "ALL") {
      dispatch({ type: "RESTORE_ORIGINAL_COUNTRIES" });
    } else {
      dispatch({ type: "FILTER", payload: continent });
    }
  };


  // Funcion para filtrar por poblacion
  const populationF = (e) => {
    const { value } = e.target;
    dispatch(filterPopulation(value));  // Llamamos a la accion filterPopulation con el valor seleccionado
  };


  // Funcion para buscar paises
  const handleSearch = (name) => {
    dispatch(searchCountry(name));  // Llamamos a la accion searchCountry con el nombre del pais buscado
  };
  

  const handleSelect = (e) => {
    dispatch(filterActCountry(e.target.value))
  }

  return (
    <nav className={style.verticalNav}>
      <img src={onuLogo} alt="Logo" className={style.logo} />
      <SearchBar onSearch={handleSearch} className={style.searchBar} />
      <div className={style.filters}>
        <select
          className={style.selector1}
          onChange={handleOrder}
          name="order"
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled>
            Select order
          </option>
          <option value="ascendent">Ascendent</option>
          <option value="descendent">Descendent</option>
        </select>
        <select
          className={style.selector1}
          onChange={populationF}
          name="pop"
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled>
            Population
          </option>
          <option value="ascendent">High</option>
          <option value="descendent">Low</option>
        </select>
      </div>

      <select
        className={style.selector2}
        onChange={filterContinent}
        name="filter"
        defaultValue={"DEFAULT"}
      >
        <option value="ALL">All Continents</option>
        <option value="Asia">Asia</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Africa">Africa</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    
      <select className={style.selector2} onChange={handleSelect}>
        <option value="">Activities</option>
        {activities.map((activity) => (
          <option key={activity.id} value={activity.name}>
            {activity.name}
          </option>
        ))}
      </select>
     
    </nav>
  );
};

export default VerticalNav;



