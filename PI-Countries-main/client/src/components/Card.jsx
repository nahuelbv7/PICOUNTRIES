import style from "../styles/Card.module.css";

const Card = (props) => {
    return (
      <div className={style.card}>
        <img src={props.flag} alt={`Bandera de ${props.name}`} className={style.img} />
        <p className={style.name}>Name: {props.name}</p>
        <p className={style.continent}>Continent: {props.continent}</p>
      </div>
    );
  };
  
  export default Card;