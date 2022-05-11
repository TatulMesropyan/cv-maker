const initialState = {
    nameInputValue: '',
    descriptionInputValue: '',
    responsibilitiesInputValue: '',
    names: [],
    descriptions: [],
    responsibilities: [],
}
const projecDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_PROJECT_NAME":
            {
                return {
                    ...state,
                    names: action.payload
                }
            }
        case "CHANGE_PROJECT_DESCRIPTION":
            {
                return {
                    ...state,
                    descriptions: action.payload
                }
            }
        case "CHANGE_PROJECT_RESPONSIBILITIES":
            {
                return {
                    ...state,
                    responsibilities: action.payload
                }
            }
        case "SET_PROJECT_NAME":
            return {
                ...state,
                nameInputValue: action.payload
            }
        case "SET_PROJECT_DESCRIPTION":
            {
                return {
                    ...state,
                    descriptionInputValue: action.payload
                }
            }
        case "SET_PROJECT_RESPONSIBILITIES":
            {
                return {
                    ...state,
                    responsibilitiesInputValue: action.payload
                }
            }
        case "ADD_PROJECT":
            {
                return {
                    ...state,
                    nameInputValue: '',
                    descriptionInputValue: '',
                    responsibilitiesInputValue: '',
                    names: [...state.names, state.nameInputValue],
                    descriptions: [...state.descriptions, state.descriptionInputValue],
                    responsibilities: [...state.responsibilities, state.responsibilitiesInputValue],
                }
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