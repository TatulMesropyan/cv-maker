
const languagesDataReducer = (state=[{}],action) => {
    switch (action.type) {
        case 'ADD_LANGUAGE':
          return [
            ...state,
            {
              language: action.language,
            },
          ]
          
        case 'REMOVE_LANGUAGE':
          return state.slice(action.index).concat(
            state.slice(action.index+1)
        );
          
        default:
          return state
      }
    }
    
export default languagesDataReducer;