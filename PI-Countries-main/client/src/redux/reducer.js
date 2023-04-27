import { GET_DATA, GET_ID, GET_ACTIVITIES } from "./actions-types";

const initialState = { 
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
        
        }

    }
 





  
  
export default reducer;