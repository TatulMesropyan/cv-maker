
const personalDataReducer = (state = {
    name: "",
    surname: "",
    email: "",
    birthday: "",
    position: "",
    country: "",
    city: "",

}, action) => {


    switch (action.type) {
        case "CHANGE_PERSONAL_FIRSTNAME": {
            return { ...state, name: action.payload }
        }
        case "CHANGE_PERSONAL_SURNAME": {
            return { ...state, surname: action.payload }
        }
        case "CHANGE_PERSONAL_EMAIL": {
            return { ...state, email: action.payload }
        }
        case "CHANGE_PERSONAL_BIRTHDAY": {
            return { ...state, birthday: action.payload }
        }
        case "CHANGE_PERSONAL_PHONE": {
            return { ...state, phone: action.payload }
        }
        case "CHANGE_PERSONAL_POSITION": {
            return { ...state, position: action.payload }
        }
        case "CHANGE_PERSONAL_COUNTRY": {
            return { ...state, country: action.payload }
        }
        case "CHANGE_PERSONAL_CITY": {
            return { ...state, city: action.payload }
        }
        default: {
            return state;
        }
    }
}
export default personalDataReducer;
