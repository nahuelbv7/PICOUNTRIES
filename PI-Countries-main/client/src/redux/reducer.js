import { GET_DATA, GET_ID, SEARCH_COUNTRY, NEXT_PAGE, PREV_PAGE, FILTER, ORDER, POPULATION, RESTORE_ORIGINAL_COUNTRIES } from "./actions-types";

const initialState = { 
    numPage: 1,      //CON ESTO VOY A CREAR UNA FUNCION PARA QUE VAYA AUMENTANDO O DISMINUYENDO LA PAGINACION
    country:[],
    filteredCountry: [], 
    detail: [],
    originalCountries: [],     
    activities: [],  
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
            const originalCountries = state.originalCountry || state.country 
            const newFilter = originalCountries.filter((c) => c.continent === action.payload)
                return {
                  ...state,
                  country: newFilter,
                  originalCountry: originalCountries,
                }

        case RESTORE_ORIGINAL_COUNTRIES:
                return {
                    ...state,
                    country: state.originalCountry || state.country, 
                    originalCountry: null,
                    };

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

  
            case POPULATION:

            let newP = [];
        
            if( action.payload ==="ascendent" )
            {
                newP = state.country.sort((a, b) => {
                    if(a.poblation < b.poblation) {
                        return 1;
                    }
                    if(a.poblation > b.poblation) {
                        return -1;
                    }
                    return 0;
        
                });
            }
            else
            {
                newP = state.country.sort((a, b) => {
                    if(a.poblation < b.poblation) {
                        return -1;
                    }
                    if(a.poblation > b.poblation) {
                        return  1;
                    }
                    return 0;
        
                });
            }
            return {
                ...state,
                poblation: [...newP],
            };
            
          
        }
        

        
    }
 ///
 
    




  
  
export default reducer;