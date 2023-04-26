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