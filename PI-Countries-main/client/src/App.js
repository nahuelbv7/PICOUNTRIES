import { useEffect, useState } from "react";
import { Route, useLocation } from 'react-router-dom';
import { Form, Detail, Landing, About,CreatAct } from "./views";
import NavBar from "./components/NavBar";
import CardsContainer from './components/CardsContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, searchCountry,  } from "./redux/actions";
import VerticalNav from "./components/VerticalNav";
import axios from "axios";




function App() {
  
  const dispatch = useDispatch();
  const location = useLocation(); // Hook de react-router-dom para obtener la ubicación actual
  const [showNavbar, setShowNavbar] = useState(true); // Estado local para controlar si se muestra o no la barra de navegación

  useEffect(() => {
    document.title = "PI-Countries";
    dispatch(getCountries()); // Llama a la acción getCountries de Redux usando dispatch.
  }, []);

  const countries = useSelector((state) => state.country); // Obtiene el estado de los países de Redux usando useSelector hook de Redux.


  useEffect(() => {
    if (location.pathname === "/") { // Compara la ubicación actual con la ruta de la página de aterrizaje "/"
      setShowNavbar(false); // Si la ubicación es la de la página /, oculta la barra de navegación
    } else {
      setShowNavbar(true); // Si la ubicación es distinta a la de la página /, muestra la barra de navegación
    }
  }, [location]);



  function onSearch(searchCountry, dispatch) {
    
       axios.get(`http://localhost:3001/countries?name=${searchCountry}`)
      .then((response) => {
        if (response && response.data && response.data.name) {
          dispatch(searchCountry(response.data.name));
        }
     })
      .catch((error) => {
      console.error(error);
     });
  }
  

  return (
    <div className="App">
      {showNavbar && <NavBar />}
      {location.pathname === "/home" ? (
        <>
          <VerticalNav onSearch={(country) => onSearch(country)} />
         </>
      ) : null}
      <Route exact path="/" component={Landing} />
      <Route path="/home">
        <CardsContainer countries={countries} />
      </Route>
      <Route path="/detail/:id" component={Detail} />
      <Route path="/activities" component={CreatAct} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;