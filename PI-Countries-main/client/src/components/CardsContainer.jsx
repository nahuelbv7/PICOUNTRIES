import Card from "./Card";
import style from "../styles/CardsContainer.module.css";
import Paginate from "../views/Paginate";
import { useSelector } from "react-redux";


const CardsContainer = ({countries}) => {    
  const {numPage} = useSelector((state) => state) // Obtengo la pagina actual del estado de Redux
   

  let init = (numPage-1) * 10 // Calculo el indice de inicio de la pagina actual
  let end = numPage * 10 // Obtiene la pagina actual del estado de Redux


  let cantPage = Math.floor(countries.length / 10)  // Calcula la cantidad total de paginas necesarias para mostrar todos los paises


    return (
      <div className={style.container}>
        <div className={style.countries}>
        {countries.slice(init, end).map((country) => {    
          return (
            <Card
              flag={country.flag}
              name={country.name}
              continent={country.continent}
              key={country.id} 
              id={country.id}
            />
          )
        } )}</div>
         <div className={style.jhon}><Paginate cantPage={cantPage}></Paginate></div>
      </div>
    );
  };

export default CardsContainer;