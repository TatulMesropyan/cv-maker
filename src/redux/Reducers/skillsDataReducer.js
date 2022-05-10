const initialState = {
    inputValue: '',
    skills: []
};

const skillsDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_SKILLS": {
            return {
                ...state,
                skill: action.payload
            }
        }
        case 'SET_SKILL_INPUT':
            return {
                ...state,
                inputValue: action.payload
            }
        case "ADD_SKILLS": {
            return {
                ...state,
                inputValue: '',
                skills: [...state.skills, state.inputValue]
            }
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