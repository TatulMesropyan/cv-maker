const skillsDataReducer = (state = [{ skillDiscription: "" }], action) => {
    switch (action.type) {
        case "CHANGE_SKILLS": {
            return {...state,
                 skillDiscription: action.payload }
        }
        case "ADD_SKILLS":
            {
                return [...state,
                { skillDiscription: action.payload }
                ]
            }
        case "REMOVE_SKILLS": {
            return state.slice(action.index).concat(
                state.slice(action.index + 1)
            );
        }
        default: {
            return state;
        }
    }
}
export default skillsDataReducer;