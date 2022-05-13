
const initialState = {
    nameInputValue: '',
    descriptionInputValue: '',
    positionInputValue: '',
    earlyInputValue: '',
    lateInputValue: '',
    countryInputValue: '',
    cityInputValue: '',
    names: [],
    positions: [],
    descriptions: [],
    earlyYears: [],
    lateYears: [],
    cities: [],
    countries: [],
}

const workDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_WORK_NAME":
            {
                return {
                    name: action.payload
                }
            }
        case "CHANGE_WORK_DESCRIPTION":
            {
                return {
                    description: action.payload
                }
            }
        case "CHANGE_WORK_POSITION":
            {
                return {
                    position: action.payload
                }
            }
        case "CHANGE_WORK_EARLY":
            {
                return {
                    earlyYear: action.payload
                }
            }
        case "CHANGE_WORK_LATE":
            {
                return {
                    lateYear: action.payload
                }
            }
        case "CHANGE_WORK_COUNTRY":
            {
                return {
                    country: action.payload
                }
            }
        case "CHANGE_WORK_CITY":
            {
                return {
                    city: action.payload
                }
            }
        case 'SET_WORK_NAME':
            return {
                ...state,
                nameInputValue: action.payload
            }
        case 'SET_WORK_DESCRIPTION':
            return {
                ...state,
                descriptionInputValue: action.payload
            }
        case 'SET_WORK_POSITION':
            return {
                ...state,
                positionInputValue: action.payload
            }
        case 'SET_WORK_LATE':
            return {
                ...state,
                lateInputValue: action.payload
            }
        case 'SET_WORK_EARLY':
            return {
                ...state,
                earlyInputValue: action.payload
            }
        case 'SET_WORK_COUNTRY':
            return {
                ...state,
                countryInputValue: action.payload
            }
        case 'SET_WORK_CITY':
            return {
                ...state,
                cityInputValue: action.payload
            }


        case "ADD_WORK":{
            return {
                ...state,
                nameInputValue: '',
                descriptionInputValue: '',
                positionInputValue: '',
                earlyInputValue: '',
                lateInputValue: '',
                cityInputValue: '',
                countryInputValue: '',
                names: [...state.names, state.nameInputValue],
                descriptions: [...state.descriptions, state.descriptionInputValue],
                positions: [...state.positions, state.positionInputValue],
                earlyYears: [...state.earlyYears, state.earlyInputValue],
                lateYears: [...state.lateYears, state.lateInputValue],
                cities: [...state.cities, state.cityInputValue],
                countries: [...state.countries, state.countryInputValue]
            }
        }
        case "REMOVE_WORK":
            {
                return state.slice(action.index).concat(
                    state.slice(action.index + 1)
                )
            }

        default:
            return state;
    }
}
export default workDataReducer;