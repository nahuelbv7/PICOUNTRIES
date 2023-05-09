import { useState } from "react";
import style from "../styles/SearchBar.module.css";
import { connect } from 'react-redux';
import { searchCountry } from '../redux/actions';

// Importamos la accion searchCountry de actions.js y la asignamos a la propiedad onSearch en mapDispatchToProps
const mapDispatchToProps = {
  onSearch: searchCountry
};

// Exportamos la version conectada del componente SearchBar
export const SearchBar = connect(null, mapDispatchToProps)(({ onSearch }) => {
  // Define el estado local searchCountryInput y setSearchCountryInput para actualizar el valor del input del usuario
  const [searchCountryInput, setSearchCountryInput] = useState('');


   // Manejo el cambio en el valor de entrada del usuario y actualizamos el estado local
  const handleInputChange = (event) => {
    setSearchCountryInput(event.target.value);
  };

  // Maneja el envio del formulario y llama a la accion onSearch definida en mapDispatchToProps con la entrada de busqueda del usuario
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchCountryInput).then((response) => {
    }).catch((error) => {
      console.error(error);
    });
  };


  
  return (
    <form onSubmit={handleSubmit} className={style["search-container"]}>
      <input
        type="text"
        placeholder=""
        value={searchCountryInput}
        onChange={handleInputChange}
        className={style["search-input"]}
      />
      <button type="submit" className={style["search-button"]}>Search</button> 
    </form>
  );
});