
const educationDataReducer = (state = [{
  name: "",
  department: "",
  earlyYear: "",
  lateYear: "",
}], action) => {
  switch (action.type) {
    case 'CHANGE_EDUCATION_NAME':
      return [{
        name: action.payload
      }]
    case 'CHANGE_EDUCATION_DEPARTMENT':
      return [{
        department: action.payload
      }]
    case 'CHANGE_EDUCATION_EARLY':
      return [{
        earlyYear: action.payload
      }]
    case 'CHANGE_EDUCATION_LATE':
      return [{
        lateYear: action.payload
      }]

    case 'ADD_EDUCATION':
      return [
        ...state,
        {
          name: action.payload,
          department: action.payload,
          earlyYear: action.payload,
          lateYear: action.payload,
        },
      ]

    case 'REMOVE_EDUCATION':
      return state.slice(action.index).concat(
        state.slice(action.index + 1)
      );;

    default:
      return state
  }
}
export default educationDataReducer;