import { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { validate } from "../components/validate";
import {createActivity} from "../redux/actions"
import style from "../styles/Activities.module.css"


const CreatAct = () => {
 
  // Se establece la conexión con el store de Redux utilizando el hook "useDispatch()"
  const dispatch = useDispatch();


  // Se define un estado local con el hook "useState()" que contiene los datos de la actividad que se va a crear
 const [data, setData] = useState({name: "", difficulty: 0, duration: 0, season: ["Verano","Otoño","Invierno","Primavera"], countries: [], choosenSeason: []});


  // Se define una función "handleChange()" que actualiza el estado "data" cada vez que se realiza un cambio en algún input del formulario de creación de actividad
  const handleChange = (e) => {
    console.log(data.countries)
    setData({
      ...data,
     [e.target.name] : e.target.value,

  });
  }
// Se define una función "handleSelect()" que actualiza el estado "data" cuando se selecciona una estación en el select de estaciones disponibles
// Si la estación seleccionada no está incluida en el array "choosenSeason" de "data", se agrega a este array
const handleSelect = (e) => {
  const selectedSeason = e.target.value;
  if (!data.choosenSeason.includes(selectedSeason)) {
    setData({
      ...data,
      choosenSeason: [...data.choosenSeason, selectedSeason]
    });
  }
}

// Se utiliza el hook "useSelector()" para obtener el array de países del store de Redux
const country = useSelector((state) => state.country);
  
 
// Se define una función "handleCountries()" que actualiza el estado "data" cuando se selecciona un país en el select de países disponibles
// Se divide la opción seleccionada en dos partes utilizando el método "split()": el código ISO del país y su nombre
// Si el nombre del país no está incluido en el array "countries" de "data", se agrega a este array
  const handleCountries = (e) => {
    let dataFromSelect = e.target.value.split(",");
    console.log(dataFromSelect[1])
     if (!data.countries.includes(dataFromSelect[1])) {
       setData({
        ...data,
        countries: [...data.countries, dataFromSelect[1]]
     });
     }
  };

   // Se define una función "handleSubmit()" que valida los datos de la actividad utilizando la función "validate()" y luego crea la actividad utilizando la acción "createActivity()" del store de Redux
  // La validación de datos es opcional y depende de cómo se haya implementado la función "validate()"
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createActivity(data))
  }



  return (
    <div className={style.bory}>
    <form onSubmit={handleSubmit} className={style.form}>
      <h1 className={style.tittle}>Create Activity:</h1>

      <h1 className={style.subtitulos}>Activity Name:</h1>
      <div>
        <input className={style.input}
         placeholder=""
          name="name"
          onChange={handleChange}
          value={data.name}
        />
        {validate(data).name ? <p className={style.pokay}>Okay</p> : <p className={style.pbad}>Put Name. Only letters(13max)</p>}
      </div>

      <h1 className={style.subtitulos}>Difficulty:</h1>
      <div>
        <input className={style.input}
         placeholder=""
          name="difficulty"
          onChange={handleChange}
          value={data.difficulty}
        />
        {validate(data).difficulty ? <p className={style.pokay}>Okay</p> : <p className={style.pbad}>Put difficulty. 1(easy), 2(medium), 3(hard)</p>}
      </div>

      <h1 className={style.subtitulos}>Duration:</h1>
      <div>
        <input  className={style.input}
           placeholder=""
          name="duration"
          onChange={handleChange}
          value={data.duration}
        />
        {validate(data).duration ? <p className={style.pokay}>Okay</p> : <p className={style.pbad}>Put duration in hours(24hours/format)</p>}
      </div>

      <h1 className={style.subtitulos}>Season:</h1>
      <div>
        <select onChange={handleSelect}>
          <option disabled readOnly>Seasons</option>
          {data.season.map((s, index) => (
            <option value={s} key={index}>
              {s}
            </option>
          ))}
        </select>
        <input className={style.input}
          placeholder=""
          value={data.choosenSeason}
          readOnly 
        />
      </div>


      <h1 className={style.subtitulos}>Countries:</h1>
      <div>
        <select onChange={handleCountries}>
          <option disabled readOnly>Countries</option>
          {country.map((d) => (
            <option value={[d.name, d.id]} key={d.id}>
              {d.name}
            </option>
          ))}
        </select>
        <input value={data.countries} className={style.input} readOnly />
        {console.log(validate(data).country)}
        {validate(data).allokay ? (
         <div> <button type="submit"  className={style.btn}>
            CREATE
          </button> </div>
        ) : null}
      </div>
    </form>
    </div>
  );
 
};

export default CreatAct;