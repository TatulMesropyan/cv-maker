
const educationDataReducer = (state = [{
  name: "",
  department: "",
  earlyYear: "",
  lateYear: "",
}], action) => {
  switch (action.type) {
    case 'CHANGE_EDUCATION_NAME':
      return {
        ...state,
        name: action.payload
      }
    case 'CHANGE_EDUCATION_DEPARTMENT':
      return {
        ...state,
        department: action.payload
      }
    case 'CHANGE_EDUCATION_EARLY':
      return {
        ...state,
        earlyYear: action.payload
      }
    case 'CHANGE_EDUCATION_LATE':
      return {
        ...state,
        lateYear: action.payload
      }

    case 'ADD_EDUCATION':
      return { 
        ...state,
        arr: [...state.arr, action.newItem]
      }

    case 'REMOVE_EDUCATION':
      return state.slice(action.index).concat(
        state.slice(action.index + 1)
      );

    default:
      return state
  }
}
export default educationDataReducer;