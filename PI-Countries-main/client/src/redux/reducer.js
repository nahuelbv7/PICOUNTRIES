import { GET_DATA, GET_ID, GET_ACTIVITIES,  SEARCH_COUNTRY, NEXT_PAGE, PREV_PAGE, FILTER, ORDER } from "./actions-types";

const initialState = { 
    numPage: 1,      //CON ESTO VOY A CREAR UNA FUNCION PARA QUE VAYA AUMENTANDO O DISMINUYENDO LA PAGINACION
    country:[],
    filteredCountry: [], 
    detail: [],
    activities: []          
};

const reducer = (state = initialState, action) => {
    switch(action.type)
    {
        default:
        return state; 
        case GET_DATA:
            return{
                ...state,
                country : action.payload,
            }
        case GET_ID:
            return{
                ...state,
                detail:action.payload
            }
        case GET_ACTIVITIES:
            return{
                ...state,
                activities: action.payload
            }
        case SEARCH_COUNTRY:
            return {
                ...state,
                country: action.payload,
            };
        case NEXT_PAGE:
            return {
                ...state,
                numPage: state.numPage + 1
            }

        case PREV_PAGE:
            return {
                ...state,
                numPage: state.numPage - 1
            }
        case FILTER:
            const newFilter = state.country.filter((c) => c.continent === action.payload)
             return {
                  ...state,
                  country: newFilter
                 }

        case ORDER:
            const newOrder = state.country.sort((a, b) => {
                if(a.id > b.id) {
                    return "ascendent" === action.payload ? 1 : -1;
                }
                if(a.id < b.id) {
                    return "descendent" === action.payload ? 1 : -1;
                }
                return 0;
            })
            return {
                ...state,
                order: newOrder,
            }
        }

    }
 





  
  
export default reducer;