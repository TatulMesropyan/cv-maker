export const setLanguageInput = value => ({
  type: "SET_LANGUAGE_INPUT",
  payload: value,
})

export const languageAdd = (value) => ({
  type: "ADD_LANGUAGE",
  payload: value
})

export const languageRemove = value => ({
  type: "REMOVE_LANGUAGE",
})

export const languageChange = value => ({
  type: "CHANGE_LANGUAGE",
  payload: value
})