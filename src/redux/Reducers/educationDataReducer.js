
const educationDataReducer = (state,action) => {
    switch (action.type) {
      case 'CHANGE_EDUCATION':
        return [...state,]
        case 'ADD_EDUCATION':
          return [
            ...state,
            {
              education: action.language,
            },
          ]
          
        case 'REMOVE_LANGUAGE':
          return state.filter(element => element !== action.payload);
          
        default:
          return state
    }
}