export const skillsAdd = value => ({
    type: "ADD_SKILLS",
  })
  export const skillsRemove = value => ({
    type: "REMOVE_SKILLS"
  })
  export const skillsChange = value => ({
    type: "CHANGE_SKILLS",
    payload: value
  })
  export const setSkillsInput = value => ({
    type: "SET_SKILL_INPUT",
    payload: value,
  })
  