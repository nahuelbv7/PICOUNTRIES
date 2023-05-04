// import { useState } from "react";
// import style from "../styles/SearchBar.module.css"; // importa el archivo CSS con los estilos de la barra de búsqueda

// export const SearchBar = ({ onSearch }) => {
//   const [searchCountry, setsearchCountry] = useState('');

//   const handleInputChange = (event) => {
//     setsearchCountry(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSearch(searchCountry);
//   };

//   return (
//     <form onSubmit={handleSubmit} className={style["search-container"]}>
//       <input
//         type="text"
//         placeholder=""
//         value={searchCountry}
//         onChange={handleInputChange}
//         className={style["search-input"]}
//       />
//       <button type="submit" className={style["search-button"]}>Search</button> 
//     </form>
//   );
// };
import { useState } from "react";
import style from "../styles/SearchBar.module.css";
import { connect } from 'react-redux';
import { searchCountry } from '../redux/actions';

const mapDispatchToProps = {
  onSearch: searchCountry
};

export const SearchBar = connect(null, mapDispatchToProps)(({ onSearch }) => {
  const [searchCountryInput, setSearchCountryInput] = useState('');

  const handleInputChange = (event) => {
    setSearchCountryInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchCountryInput).then((response) => {
      // Maneja la respuesta aquí
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