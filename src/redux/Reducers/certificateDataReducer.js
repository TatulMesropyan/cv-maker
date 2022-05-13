const initialState = {
    inputValue: '',
    certificates: []
};
const certificateDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CERT_INPUT':
            return {
                ...state,
                inputValue: action.payload
            }

        case "CHANGE_CERT": {
            return { ...state, certificate: action.payload }
        }
        case "ADD_CERT":
            return {
                ...state,
                inputValue: '',
                certificates: [...state.certificates, state.inputValue]
            }
        case "REMOVE_CERT": {
            return state.slice(action.index).concat(
                state.slice(action.index + 1)
            );
        }
        default: {
            return state;
        }
    }
}

export default certificateDataReducer;