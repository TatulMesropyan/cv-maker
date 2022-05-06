
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
            return { name: action.payload }
        }
        case "CHANGE_PERSONAL_SURNAME": {
            return { surname: action.payload }
        }
        case "CHANGE_PERSONAL_EMAIL": {
            return { email: action.payload }
        }
        case "CHANGE_PERSONAL_BIRTHDAY": {
            return { birthday: action.payload }
        }
        case "CHANGE_PERSONAL_PHONE": {
            return { phone: action.payload }
        }
        case "CHANGE_PERSONAL_POSITION": {
            return { position: action.payload }
        }
        case "CHANGE_PERSONAL_COUNTRY": {
            return { country: action.payload }
        }
        case "CHANGE_PERSONAL_CITY": {
            return { city: action.payload }
        }
        default: {
            return state;
        }
    }
}
export default personalDataReducer;
