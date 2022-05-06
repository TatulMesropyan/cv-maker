
const workDataReducer = (state,action) => {
    switch (action.type) {
        case "CHANGE_NAME":
            {
                return [{
                    ...state
                }]
            }
            case "CHANGE_DISCRIPTION":
            {
                return [{
                    ...state
                }]
            }
            case "CHANGE_RESPONSIBILITIES":
            {
                return [{
                    ...state
                }]
            }
            case "ADD_PROJECT":
            {
                return [
                    ...state,{
                        name:action.payload,
                        earlyYear:action.payload,
                        lateYear:action.payload,
                        description:action.payload,
                        locationCity:action.payload,
                        locationCountry:action.payload
                    }
                ]
            }
            case "REMOVE_PROJECT":
            {
                return state.slice(action.index).concat(
                    state.slice(action.index+1)
                )
            }
    
        default:
            return state;
    }
}
    export default workDataReducer;