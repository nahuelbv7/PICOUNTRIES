import { useDispatch, useSelector } from "react-redux";
import style from "../styles/VerticalNav.module.css"
import {SearchBar} from "./SearchBar";
import {orderCountries, filterCountries} from "../redux/actions"
import onuLogo from "../images/onu.png";

const VerticalNav = ({ onSearch }) => {
  const dispatch = useDispatch();
  // const { country } = useSelector((state) => state);
  

  function handleOrder(e) {
    const { name, value } = e.target
    dispatch(orderCountries(value))
  }

  function filterContinent (e){
    const { value } = e.target;
    dispatch(filterCountries(value))
  }

  return (
    <nav className={style.verticalNav}>
       <img src={onuLogo} alt="Logo" className={style.logo} />
      <SearchBar onSearch={onSearch} className={style.searchBar} />
     
     <select className={style.selector} onChange={handleOrder} name="order" defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disable>Select order</option>
        <option value="ascendent">Ascendent</option>
        <option value="descendent">Descendent</option>
      </select>


      <select className={style.selector} onChange={filterContinent} name="filter" defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disable>Continent</option>
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






