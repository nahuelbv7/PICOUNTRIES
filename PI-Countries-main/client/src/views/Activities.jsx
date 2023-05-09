import { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { validate } from "../components/validate";
import {createActivity} from "../redux/actions"
import style from "../styles/Activities.module.css"


const CreatAct = () => {
 
  const dispatch = useDispatch();


  /// estado local para guardar
 const [data, setData] = useState({name: "", difficulty: 0, duration: 0, season: ["Verano","Otoño","Invierno","Primavera"], countries: [], choosenSeason: []});



//// 
  const handleChange = (e) => {
    console.log(data.countries)
    setData({
      ...data,
     [e.target.name] : e.target.value,

  });
  }
///
const handleSelect = (e) => {
  const selectedSeason = e.target.value;
  if (!data.choosenSeason.includes(selectedSeason)) {
    setData({
      ...data,
      choosenSeason: [...data.choosenSeason, selectedSeason]
    });
  }
}
////
  // const handleDelete = (e) => {
  //   setData({
  //     ...data,
  //    choosenSeason : []
  //  })
  // }

  /////

  const country = useSelector((state) => state.country);
  
  ///

  const handleCountries = (e) => {
    let dataFromSelect = e.target.value.split(",");
    // const countrySelected = e.target.value;
    console.log(dataFromSelect[1])
     if (!data.countries.includes(dataFromSelect[1])) {
       setData({
        ...data,
        countries: [...data.countries, dataFromSelect[1]]
     });
     }
  };

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
          // onClick={handleDelete}
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