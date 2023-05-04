// import { useDispatch } from "react-redux";
// import style from "../styles/VerticalNav.module.css"
// import {SearchBar} from "./SearchBar";
// import {orderCountries, filterPopulation} from "../redux/actions"
// import onuLogo from "../images/arg.gif";

// const VerticalNav = ({ onSearch }) => {
//   const dispatch = useDispatch();

  

//   function handleOrder(e) {
//     const { value } = e.target
//     dispatch(orderCountries(value))
//   }

//   const filterContinent = (e) => {
//     const continent = e.target.value;
//     if (continent === "ALL") {
//       dispatch({ type: "RESTORE_ORIGINAL_COUNTRIES" });
//     } else {
//       dispatch({ type: "FILTER", payload: continent });
//     }
//   };

//   function populationF (e) {
//     const { value } = e.target;
//     dispatch(filterPopulation(value));
//   }

//   return (
//     <nav className={style.verticalNav}>
//        <img src={onuLogo} alt="Logo" className={style.logo} />
//       <SearchBar onSearch={onSearch} className={style.searchBar} />
     
//     <div className={style.filters}>
//       <select className={style.selector1} onChange={handleOrder} name="order" defaultValue={"DEFAULT"}>
//         <option value="DEFAULT" disable>Select order</option>
//         <option value="ascendent">Ascendent</option>
//         <option value="descendent">Descendent</option>
//       </select>
//       <select className={style.selector1} onChange={populationF} name="pop" defaultValue={"DEFAULT"}>
//         <option value="DEFAULT" disable>Population</option>
//         <option value="ascendent">High</option>
//         <option value="descendent">Low</option>
//       </select>
//       </div> 

//       <select className={style.selector2} onChange={filterContinent} name="filter" defaultValue={"DEFAULT"}>
//       <option value="ALL">All Continents</option>
//         <option value="Asia">Asia</option>
//         <option value="Antarctica">Antarctica</option>
//         <option value="Africa">Africa</option>
//         <option value="North America">North America</option>
//         <option value="South America">South America</option>
//         <option value="Europe">Europe</option>
//         <option value="Oceania">Oceania</option>
//       </select>
      
//     </nav>
//   );
// };

// export default VerticalNav;


import { useDispatch } from "react-redux";
import style from "../styles/VerticalNav.module.css"
import { searchCountry, orderCountries, filterPopulation } from "../redux/actions"
import { SearchBar } from "./SearchBar";
import onuLogo from "../images/arg.gif";

const VerticalNav = () => {
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    const { value } = e.target;
    dispatch(orderCountries(value));
  };

  const filterContinent = (e) => {
    const continent = e.target.value;
    if (continent === "ALL") {
      dispatch({ type: "RESTORE_ORIGINAL_COUNTRIES" });
    } else {
      dispatch({ type: "FILTER", payload: continent });
    }
  };

  const populationF = (e) => {
    const { value } = e.target;
    dispatch(filterPopulation(value));
  };

  const handleSearch = (name) => {
    dispatch(searchCountry(name));
  };

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
    </nav>
  );
};

export default VerticalNav;



