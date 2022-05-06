
//Personal 

export const personalNameChange = text => ({
  type: "CHANGE_PERSONAL_FIRSTNAME",
  payload: text,
})

export const personalSurnameChange = text => ({
  type: "CHANGE_PERSONAL_SURNAME",
  payload: text
})

export const personalEmailChange = text => ({
  type: "CHANGE_PERSONAL_EMAIL",
  payload: text
})

export const personalPhoneChange = number => ({
  type: "CHANGE_PERSONAL_PHONE",
  payload: number
})

export const personalBirthdayChange = text => ({
  type:"CHANGE_PERSONAL_BIRTHDAY",
  payload:text
})

export const personalPositionChange = text => ({
  type: "CHANGE_PERSONAL_POSITION",
  payload: text
})

export const personalCountryChange = text => ({
  type: "CHANGE_PERSONAL_COUNTRY",
  payload: text
})

export const personalCityChange = text => ({
  type: "CHANGE_PERSONAL_CITY`",
  payload: text,
})

//Language 

export const languageAdd = text => ({
  type: "ADD_LANGUAGE",
})

export const languageRemove = text => ({
  type: "REMOVE_LANGUAGE",
})

export const languageChange = text => ({
  type: "CHANGE_LANGUAGE",
  payload: text
})

//Education

export const educationNameChange = text => ({
  type: "CHANGE_EDUCATION_NAME",
  payload: text
})

export const educationDepartmentChange = text => ({
  type: "CHANGE_EDUCATION_DEPARTMENT",
  payload: text
})

export const educationEarlyYearChange = number => ({
  type: "CHANGE_EDUCATION_EARLY",
  payload: number
})

export const educationLateYearChange = number => ({
  type: "CHANGE_EDUCATION_LATE",
  payload: number
})

export const educationRemove = text => ({
  type: "REMOVE_EDUCATION",
})
export const educationAdd = text => ({
  type: "ADD_EDUCATION",
})

//Certificate

export const certificateAdd = text => ({
  type: "ADD_CERT",
})

export const certificateChange = text => ({
  type: "CHANGE_CERT",
})

export const certificateRemove = text => ({
  type: "REMOVE_CERT"
})

//Project 

export const projectAdd = text => ({
  type: "ADD_PROJECT"
})

export const projectRemove = text => ({
  type: "REMOVE_PROJECT"
})

export const projectResponseChange = text => ({
  type: "CHANGE_PROJECT_RESPONSIBILITIES",
  payload:text
})

export const projectNameChange = text => ({
  type: "CHANGE_PROJECT_NAME",
  payload: text
})

export const projectDescriptionChange = text => ({
  type: "CHANGE_PROJECT_DESCRIPTION",
  payload: text
})

//Skills

export const skillsAdd = text => ({
  type: "ADD_SKILLS",
})
export const skillsRemove = text => ({
  type: "REMOVE_SKILLS"
})
export const skillsChange = text => ({
  type: "CHANGE_SKILLS",
  payload:text
})

//Work

export const workNameChange = text => ({
  type: "CHANGE_WORK_NAME",
  payload: text
})

export const workDescriptionChange = text => ({
  type: "CHANGE_WORK_DESCRIPTION",
  payload: text
})

export const workPositionChange = text =>({
  type:"CHANGE_WORK_POSITION",
  payload:text

})

export const workEarlyYearChange = number => ({
  type: "CHANGE_WORK_EARLY",
  payload: number
})

export const workLateYearChange = number => ({
  type: "CHANGE_WORK_LATE",
  payload: number
})

export const workCountryChange = text =>({
  type:"CHANGE_WORK_COUNTRY",
  payload:text
})

export const workCityChange = text =>({
type:"CHANGE_WORK_CITY",
payload:text

})

export const workRemove = text => ({
  type: "REMOVE_WORK",
})

export const workAdd = text => ({
  type: "ADD_WORK",
})
