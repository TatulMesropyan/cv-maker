export const projectAdd = () => ({
  type: "ADD_PROJECT"
})
export const projectRemove = value => ({
  type: "REMOVE_PROJECT"
})
export const projectResponseChange = value => ({
  type: "CHANGE_PROJECT_RESPONSIBILITIES",
  payload: value
})
export const projectNameChange = value => ({
  type: "CHANGE_PROJECT_NAME",
  payload: value
})
export const projectDescriptionChange = value => ({
  type: "CHANGE_PROJECT_DESCRIPTION",
  payload: value
})
export const setProjectName = value => ({
  type: "SET_PROJECT_NAME",
  payload: value
})
export const setProjectResponse = value => ({
  type: "SET_PROJECT_RESPONSIBILITIES",
  payload: value
})
export const setProjectDescription = value => ({
  type: "SET_PROJECT_DESCRIPTION",
  payload: value
})
