import axios from "axios";
import { GET_DATA, GET_ID, SEARCH_COUNTRY, NEXT_PAGE, PREV_PAGE, FILTER, ORDER, POPULATION, CREATE_ACTIVITY,FETCH_ACTIVITIES } from "./actions-types";



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
  let test = name.toLowerCase();
  test = test.charAt(0).toUpperCase()+test.substring(1);
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/countries/name/${test}`);
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
  return {
    type: POPULATION,
    payload: population
  }
}


//////////////////////ACTIVITIES//////////////////////////
export const createActivity =  (activity) => {
  return async function (dispatch) {
  const response = await fetch('http://localhost:3001/activities', {method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(activity)
    });
    const responsJson = await response.json();


      try{
        console.log(responsJson)
        dispatch({type:CREATE_ACTIVITY,payload:responsJson});
      }
      catch(err)
      {
        console.log(err.message);
      }}
}
  

//FILTER activities

///
export const fetchActivities = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/activities");
      const activities = await response.json();
      dispatch({ type: FETCH_ACTIVITIES,  payload: activities.activities });
    } catch (error) {
      console.error(error);
    }
  };
};