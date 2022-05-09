const projecDataReducer = (state = [{
    name: "",
    description: "",
    responsibilities: "",
}], action) => {
    switch (action.type) {
        case "CHANGE_PROJECT_NAME":
            {
                return {...state,
                    name: action.payload
                }
            }
        case "CHANGE_PROJECT_DESCRIPTION":
            {
                return {...state,
                    description: action.payload
                }
            }
        case "CHANGE_PROJECT_RESPONSIBILITIES":
            {
                return {...state,
                    responsibilities: action.payload
                }
            }
        case "ADD_PROJECT":
            {
                return [...state,
                {
                    name: action.payload,
                    description: action.payload,
                    responsibilities: action.payload
                }
                ]
            }
        case "REMOVE_PROJECT":
            {
                return state.slice(action.index).concat(
                    state.slice(action.index + 1)
                )
            }

        default:
            return state;
    }
}
export default projecDataReducer;