import axios from "axios";
import { GET_DATA, GET_ID, GET_ACTIVITIES, SEARCH_COUNTRY, NEXT_PAGE, PREV_PAGE, FILTER, ORDER, POPULATION } from "./actions-types";



export const getCountries = () => {
    
    return async function(dispatch){
    const response = await axios.get("http://localhost:3001/countries");
     
  try{
    dispatch({type: GET_DATA,payload:response.data});
  }
  catch(err)
  {
    console.log(err.message);
  }}
}



export const getCountryById = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/countries/${id}`);

    try {
      dispatch({ type: GET_ID, payload: response.data });
    } catch (err) {
      console.log(err.message);
    }
  };
};


export const searchCountry = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/countries?name=${name}`);
      dispatch({ type: SEARCH_COUNTRY, payload: [response.data] });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const nextPage = () => {
  return {
    type: NEXT_PAGE,
  }
}

export const prevPage = () => {
  return {
    type: PREV_PAGE,
  }
}


/// filtercountries -> continent
export const filterCountries = (continent) => {
  return {
    type: FILTER,
    payload: continent
  }
}


// order descendentemente los países por orden alfabético y por cantidad de población.
export const orderCountries = (order) => {
  return {
    type: ORDER,
    payload: order
  }
}


/// order filter X population
export const filterPopulation = (population) => {
  console.log(population)
  return {
    type: POPULATION,
    payload: population
  }
}