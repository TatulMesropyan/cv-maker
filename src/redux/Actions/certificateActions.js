export const certificateAdd = value => ({
  type: "ADD_CERT",
})

export const certificateChange = value => ({
  type: "CHANGE_CERT",
  payload: value
})

export const certificateRemove = value => ({
  type: "REMOVE_CERT"
})
export const setCertificateInput = value => ({
  type: "SET_CERT_INPUT",
  payload: value
})