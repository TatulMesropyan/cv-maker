const initialState = {
  inputValue: '',
  languageRedux: []
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
        languageRedux: [...state.languageRedux, state.inputValue]
      }

    case 'REMOVE_LANGUAGE':
      return {
          ...state,
          languageRedux:[state.languageRedux.filter((item,index) => index !== action.payload)]
      }

    case 'CHANGE_LANGUAGE':
      return {...state,
        language: action.payload
      };

    default:
      return state
  }
}

export default languagesDataReducer;