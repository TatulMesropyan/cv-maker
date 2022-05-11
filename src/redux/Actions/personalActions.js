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
    type: "CHANGE_PERSONAL_BIRTHDAY",
    payload: value
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
    type: "CHANGE_PERSONAL_CITY",
    payload: value,
  })
  