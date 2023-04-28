import { GET_DATA, GET_ID, GET_ACTIVITIES,  SEARCH_COUNTRY, NEXT_PAGE, PREV_PAGE } from "./actions-types";

const initialState = { 
    numPage: 1,      //CON ESTO VOY A CREAR UNA FUNCION PARA QUE VAYA AUMENTANDO O DISMINUYENDO LA PAGINACION
    country:[],
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
                country : action.payload
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
        }

    }
 





  
  
export default reducer;