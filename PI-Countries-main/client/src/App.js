import './App.css';
// import axios from "axios";
import { useEffect, useState } from "react";
import { Route } from 'react-router-dom';
import { Form, Detail, Landing, About } from "./views";
import NavBar from "./components/NavBar";
import CardsContainer from './components/CardsContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from "./redux/actions";

function App() {
  
  const dispatch = useDispatch();  // Asigna useDispatch hook de Redux a la constante dispatch.
  
  // Efecto secundario que se ejecuta solo una vez, cuando el componente se monta.
  useEffect(() => {
    document.title = "PI-Countries";  // Cambia el título del documento HTML.
    dispatch(getCountries());         // Llama a la acción getCountries de Redux usando dispatch.
  }, []);

  const countries = useSelector((state) => state.country);  // Obtiene el estado de los países de Redux usando useSelector hook de Redux.

  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={<Landing />} />
      <Route path="/home">
        <CardsContainer countries={countries} />  
      </Route>
      <Route path="/detail" component={<Detail />} />
      <Route path="/form" component={<Form />} />
      <Route path="/about" component={<About />} />
    </div>
  );
}


export default App;
