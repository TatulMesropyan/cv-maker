
//Personal 

export const personalNameChange = (value) => ({
  type: "CHANGE_PERSONAL_FIRSTNAME",
  payload: value,
})

export const personalSurnameChange = value => ({
  type: "CHANGE_PERSONAL_SURNAME",
  payload: value
})

export const personalEmailChange = value => ({
  type: "CHANGE_PERSONAL_EMAIL",
  payload: value
})

export const personalPhoneChange = number => ({
  type: "CHANGE_PERSONAL_PHONE",
  payload: number
})

export const personalBirthdayChange = value => ({
  type:"CHANGE_PERSONAL_BIRTHDAY",
  payload:value
})

export const personalPositionChange = value => ({
  type: "CHANGE_PERSONAL_POSITION",
  payload: value
})

export const personalCountryChange = value => ({
  type: "CHANGE_PERSONAL_COUNTRY",
  payload: value
})

export const personalCityChange = value => ({
  type: "CHANGE_PERSONAL_CITY`",
  payload: value,
})

//Language 

export const languageAdd = value => ({
  type: "ADD_LANGUAGE",
})

export const languageRemove = value => ({
  type: "REMOVE_LANGUAGE",
})

export const languageChange = value => ({
  type: "CHANGE_LANGUAGE",
  payload: value
})

//Education

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

export const educationLateYearChange = value  => ({
  type: "CHANGE_EDUCATION_LATE",
  payload: value
})

export const educationRemove = value => ({
  type: "REMOVE_EDUCATION",
})
export const educationAdd = value => ({
  type: "ADD_EDUCATION",
})

//Certificate

export const certificateAdd = value => ({
  type: "ADD_CERT",
})

export const certificateChange = value => ({
  type: "CHANGE_CERT",
})

export const certificateRemove = value => ({
  type: "REMOVE_CERT"
})

//Project 

export const projectAdd = value => ({
  type: "ADD_PROJECT"
})

export const projectRemove = value => ({
  type: "REMOVE_PROJECT"
})

export const projectResponseChange = value => ({
  type: "CHANGE_PROJECT_RESPONSIBILITIES",
  payload:value
})

export const projectNameChange = value => ({
  type: "CHANGE_PROJECT_NAME",
  payload: value
})

export const projectDescriptionChange = value => ({
  type: "CHANGE_PROJECT_DESCRIPTION",
  payload: value
})

//Skills

export const skillsAdd = value => ({
  type: "ADD_SKILLS",
})
export const skillsRemove = value => ({
  type: "REMOVE_SKILLS"
})
export const skillsChange = value => ({
  type: "CHANGE_SKILLS",
  payload:value
})

//Work

export const workNameChange = value => ({
  type: "CHANGE_WORK_NAME",
  payload: value
})

export const workDescriptionChange = value => ({
  type: "CHANGE_WORK_DESCRIPTION",
  payload: value
})

export const workPositionChange = value =>({
  type:"CHANGE_WORK_POSITION",
  payload:value

})

export const workEarlyYearChange = number => ({
  type: "CHANGE_WORK_EARLY",
  payload: number
})

export const workLateYearChange = number => ({
  type: "CHANGE_WORK_LATE",
  payload: number
})

export const workCountryChange = value =>({
  type:"CHANGE_WORK_COUNTRY",
  payload:value
})

export const workCityChange = value =>({
type:"CHANGE_WORK_CITY",
payload:value

})

export const workRemove = value => ({
  type: "REMOVE_WORK",
})

export const workAdd = value => ({
  type: "ADD_WORK",
})
