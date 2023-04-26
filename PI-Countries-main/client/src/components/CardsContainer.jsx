import Card from "./Card";
import style from "../styles/CardsContainer.module.css";

const CardsContainer = ({countries}) => {
    return (
      <div className={style.container}>
        {countries.map((country) => {
          return (
            <Card
              flag={country.flag}
              name={country.name}
              continent={country.continent}
              key={country.id} 
            />
          )
        } )}
      </div>
    );
  };

export default CardsContainer;