export const setLanguageInput = value => ({
    type: "SET_LANGUAGE_INPUT",
    payload: value,
  })
  
  export const languageAdd = () => ({
    type: "ADD_LANGUAGE",
  })
  
  export const languageRemove = value => ({
    type: "REMOVE_LANGUAGE",
  })
  
  export const languageChange = value => ({
    type: "CHANGE_LANGUAGE",
    payload: value
  })