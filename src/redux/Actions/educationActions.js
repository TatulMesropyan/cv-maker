export const educationNameChange = value => ({
  type: "CHANGE_EDUCATION_NAME",
  payload: value
})
export const educationDepartmentChange = value => ({
  type: "CHANGE_EDUCATION_DEPARTMENT",
  payload: value
})
export const educationEarlyYearChange = value => ({
  type: "CHANGE_EDUCATION_EARLY",
  payload: value
})
export const educationLateYearChange = value => ({
  type: "CHANGE_EDUCATION_LATE",
  payload: value
})
export const educationRemove = value => ({
  type: "REMOVE_EDUCATION",
})
export const educationAdd = () => ({
  type: "ADD_EDUCATION",
})
export const setEducationName = value => ({
  type: "SET_EDUCATION_NAME",
  payload: value
})
export const setEducationDepartment = value => ({
  type: "SET_EDUCATION_DEPARTMENT",
  payload: value
})
export const setEducationLate = value => ({
  type: "SET_EDUCATION_LATE",
  payload: value
})
export const setEducationEarly = value => ({
  type: "SET_EDUCATION_EARLY",
  payload: value
})
