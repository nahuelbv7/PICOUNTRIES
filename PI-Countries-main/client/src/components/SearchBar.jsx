import { useState } from "react";
import { useDispatch } from "react-redux";
import style from "../styles/SearchBar.module.css"; // importa el archivo CSS con los estilos de la barra de búsqueda

export const SearchBar = ({ onSearch }) => {
  const [searchCountry, setsearchCountry] = useState('');

  const handleInputChange = (event) => {
    setsearchCountry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchCountry);
  };

  return (
    <form onSubmit={handleSubmit} className={style["search-container"]}>
      <input
        type="text"
        placeholder=""
        value={searchCountry}
        onChange={handleInputChange}
        className={style["search-input"]}
      />
      <button type="submit" className={style["search-button"]}>Search</button> 
    </form>
  );
};