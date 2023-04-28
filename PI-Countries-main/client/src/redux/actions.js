import axios from "axios";
import { GET_DATA, GET_ID, GET_ACTIVITIES, SEARCH_COUNTRY, NEXT_PAGE, PREV_PAGE } from "./actions-types";



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


export const searchCountry = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/countries/${id}`);
    console.log(id)
    try {
      dispatch({ type: SEARCH_COUNTRY, payload: response.data });
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
