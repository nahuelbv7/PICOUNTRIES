import { useState } from "react";
import { useDispatch } from "react-redux";




export const SearchBar = ({ onSearch }) => {
    // Estado local para el término de búsqueda
    const [searchCountry, setsearchCountry] = useState('');
  
    // Función que se ejecuta cada vez que el usuario escribe en el campo de búsqueda
    const handleInputChange = (event) => {
      setsearchCountry(event.target.value); // Actualiza el estado local con el valor actual del campo de búsqueda
    };
  
    // Función que se ejecuta al hacer clic en el botón de búsqueda o al presionar Enter en el campo de búsqueda
    const handleSubmit = (event) => {
      event.preventDefault(); // Evita que se recargue la página al enviar el formulario
      onSearch(searchCountry); // Llama a la función onSearch que se pasa como prop con el término de búsqueda como argumento
    };
  
    // Retorna el formulario de búsqueda con el campo de entrada y el botón de envío
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Country"
          value={searchCountry} // Establece el valor del campo de búsqueda con el estado local
          onChange={handleInputChange} // Asigna la función handleInputChange al evento onChange del campo de búsqueda
        />
        <button type="submit">Search</button>
      </form>
    );
  };