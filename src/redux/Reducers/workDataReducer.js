const workDataReducer = (state = [{
    name: "",
    position: "",
    earlyYear: "",
    lateYear: "",
    description: "",
    locationCity: "",
    locationCountry: "",
}], action) => {
    switch (action.type) {
        case "CHANGE_WORK_NAME":
            {
                return [{
                    name: action.payload
                }]
            }
        case "CHANGE_WORK_DESCRIPTION":
            {
                return [{
                    description: action.payload
                }]
            }
        case "CHANGE_WORK_POSITION":
            {
                return [{
                    position: action.payload
                }]
            }
        case "CHANGE_WORK_EARLY":
            {
                return [{
                    earlyYear: action.payload
                }]
            }
        case "CHANGE_WORK_LATE":
            {
                return [{
                    lateYear: action.payload
                }]
            }
        case "CHANGE_WORK_COUNTRY":
            {
                return [{
                    locationCountry: action.payload
                }]
            }
        case "CHANGE_WORK_CITY":
            {
                return [{
                    locationCity: action.payload
                }]
            }
        case "ADD_PROJECT":
            {
                return [
                    ...state, {
                        name: action.payload,
                        position: action.payload,
                        earlyYear: action.payload,
                        lateYear: action.payload,
                        description: action.payload,
                        locationCity: action.payload,
                        locationCountry: action.payload
                    }
                ]
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