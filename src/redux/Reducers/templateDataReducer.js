

const initialState = {
};

const templateDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "updateTemplateData":
            return action.payload;

        default:
            return state;
    }
};
export default templateDataReducer;
