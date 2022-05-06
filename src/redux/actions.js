
export const personalNameChange = text => ({
  type:"CHANGE_FIRSTNAME",
  payload:text,
})

export const personalSurnameChange = text => ({
  type:"CHANGE_SURNAME",
  payload:text
})

export const personalEmailChange = e => ({
  type:"CHANGE_EMAIL",
  payload: 'Change email'
})

export const personalPhoneChange = e => ({
  type:"CHANGE_PHONE",
  payload: 'Change email'
})

export const personalPositionChange = e => ({
  type:"CHANGE_PHONE",
  payload: 'Change phone'
})

export const personalCountryChange = e => ({
  type:"CHANGE_COUNTRY",
  payload: 'Change country'
})

export const personalCityChange = e => ({
  type:"CHANGE_CITY",
  payload: 'Change city'
})

export const personNameChange = e => ({
  type:"CHANGE_FIRSTNAME",
  payload: 'Change name'
})

