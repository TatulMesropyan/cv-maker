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
  export const educationAdd = value => ({
    type: "ADD_EDUCATION",
  })