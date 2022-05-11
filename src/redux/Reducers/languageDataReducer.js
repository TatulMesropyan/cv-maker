const initialState = {
  inputValue: '',
  languages: []
};

const languagesDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE_INPUT':
      return {
        ...state,
        inputValue: action.payload
      }
    case 'ADD_LANGUAGE':
      return {
        ...state,
        inputValue: '',
        languages: [...state.languages, state.inputValue]
      }

    case 'REMOVE_LANGUAGE':
      return state.slice(action.index).concat(
        state.slice(action.index + 1)
      );

    case 'CHANGE_LANGUAGE':
      return {...state,
        language: action.payload
      };

    default:
      return state
  }
}

export default languagesDataReducer;