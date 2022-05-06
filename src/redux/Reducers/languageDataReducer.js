const languagesDataReducer = (state = [{ language: "" }], action) => {
  switch (action.type) {
    case 'ADD_LANGUAGE':
      return [
        ...state,
        {
          language: action.payload,
        },
      ]

    case 'REMOVE_LANGUAGE':
      return state.slice(action.index).concat(
        state.slice(action.index + 1)
      );

    case 'CHANGE_LANGUAGE':
      return [{
        language: action.payload
      }];

    default:
      return state
  }
}

export default languagesDataReducer;