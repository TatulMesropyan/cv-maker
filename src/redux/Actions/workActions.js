export const workNameChange = value => ({
  type: "CHANGE_WORK_NAME",
  payload: value
})

export const workDescriptionChange = value => ({
  type: "CHANGE_WORK_DESCRIPTION",
  payload: value
})

export const workPositionChange = value => ({
  type: "CHANGE_WORK_POSITION",
  payload: value
})

export const workEarlyYearChange = value => ({
  type: "CHANGE_WORK_EARLY",
  payload: value
})

export const workLateYearChange = value => ({
  type: "CHANGE_WORK_LATE",
  payload: value
})

export const workCountryChange = value => ({
  type: "CHANGE_WORK_COUNTRY",
  payload: value
})

export const workCityChange = value => ({
  type: "CHANGE_WORK_CITY",
  payload: value

})
export const setWorkName = value => ({
  type: "SET_WORK_NAME",
  payload: value
})

export const setWorkDescription = value => ({
  type: "SET_WORK_DESCRIPTION",
  payload: value
})

export const setWorkPosition = value => ({
  type: "SET_WORK_POSITION",
  payload: value

})

export const setWorkEarlyYear = value => ({
  type: "SET_WORK_EARLY",
  payload: value
})

export const setWorkLateYear = value => ({
  type: "SET_WORK_LATE",
  payload: value
})

export const setWorkCountry = value => ({
  type: "SET_WORK_COUNTRY",
  payload: value
})

export const setWorkCity = value => ({
  type: "SET_WORK_CITY",
  payload: value

})

export const workRemove = value => ({
  type: "REMOVE_WORK",
})

export const workAdd = () => ({
  type: "ADD_WORK",
})
