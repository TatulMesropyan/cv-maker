

export const personalDataReducer = (state = {
    name: "",
    surname: "",
    email: "",
    birthday: "",
    position: "",
    country: "",
    city: "",

}, action) => {
    

    switch (action.type) {
        case "CHANGE_FIRSTNAME": {
            return { ...state, name: action.name }
        }
        case "CHANGE_SURNAME":
            {
                return { ...state, surname: action.payload }
            }
        case "CHANGE_EMAIL": {
            return { ...state, email: action.payload }
        }
        case "CHANGE_PHONE": {
            return { ...state, birthday: action.payload }
        }
        case "CHANGE_POSITION": {
            return { ...state, position: action.payload }
        }
        case "CHANGE_COUNTRY": {
            return { ...state, country: action.payload }
        }
        case "CHANGE_CITY": {
            return { ...state, position: action.payload }
        }
        default: {
            return state;
        }
    }
}

