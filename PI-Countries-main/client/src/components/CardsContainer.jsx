import Card from "./Card";
import style from "../styles/CardsContainer.module.css";
import Paginate from "../views/Paginate";
import { useSelector } from "react-redux";


const CardsContainer = ({countries}) => {    
  const {numPage} = useSelector((state) => state)
   

  let init = (numPage-1) * 10
  let end = numPage * 10

  let cantPage = Math.floor(countries.length / 10)

    return (
      <div className={style.container}>
        <div className={style.countries}>
        {countries.slice(init, end).map((country) => {     // con el slice hago que se vean solo 10 hago un mapeo de countries del reducer
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