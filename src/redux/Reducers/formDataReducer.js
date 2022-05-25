

const initialState = {
};

const formDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case "updateFormData":
			return action.payload;

		default:
			return state;
	}
};
export default formDataReducer;
