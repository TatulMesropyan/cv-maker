
const initialState = {
  nameInputValue: '',
  departmentInputValue: '',
  earlyInputValue: '',
  lateInputValue: '',
  names: [],
  departments: [],
  earlyYears: [],
  lateYears: [],
}
const educationDataReducer = (state = initialState, action) => {
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
    case 'SET_EDUCATION_NAME':
      return {
        ...state,
        nameInputValue: action.payload
      }
    case 'SET_EDUCATION_DEPARTMENT':
      return {
        ...state,
        departmentInputValue: action.payload
      }
    case 'SET_EDUCATION_LATE':
      return {
        ...state,
        lateInputValue: action.payload
      }
    case 'SET_EDUCATION_EARLY':
      return {
        ...state,
        earlyInputValue: action.payload
      }

    case 'ADD_EDUCATION':
      return {
        ...state,
        nameInputValue: '',
        departmentInputValue: '',
        earlyInputValue: '',
        lateInputValue: '',
        names: [...state.names, state.nameInputValue],
        departments: [...state.departments, state.departmentInputValue],
        earlyYears: [...state.earlyYears, state.earlyInputValue],
        lateYears: [...state.lateYears, state.lateInputValue],
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