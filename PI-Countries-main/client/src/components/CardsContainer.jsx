import Card from "./Card";
import style from "../styles/CardsContainer.module.css";
import Paginate from "../views/Paginate";
import { useSelector } from "react-redux";
import { nextPage } from "../redux/actions";

const CardsContainer = ({countries}) => {    
  const {numPage} = useSelector((state) => state)
  
  let init = (numPage-1) * 8
  let end = numPage * 8

  let cantPage = Math.floor(countries.length / 8)

    return (
      <div className={style.container}>
        {countries.slice(init, end).map((country) => {     // con el slice hago que se vean solo 8 hago un mapeo de countries del reducer
          return (
            <Card
              flag={country.flag}
              name={country.name}
              continent={country.continent}
              key={country.id} 
              id={country.id}
            />
          )
        } )}
        <Paginate cantPage={cantPage}></Paginate>
      </div>
    );
  };

export default CardsContainer;