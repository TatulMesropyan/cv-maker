const certificatesDataReducer = (state=[{}], action) => {
    switch (action.type) {
        case "CHANGE_CERT": {
            return {certificate: action.payload }
        }
        case "ADD_CERT":
            {
                return [...state,
                { certificate: action.payload }
                ]
            }
        case "REMOVE_CERT":{
            return state.slice(action.index).concat(
                state.slice(action.index+1)
            );
        }
        default: {
            return state;
        }
    }
}

export default certificatesDataReducer;