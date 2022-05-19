import  {combineReducers}  from "@reduxjs/toolkit";
import  formDataReducer  from '../redux/Reducers/formDataReducer';

const rootReducer = combineReducers({
  formDataReducer
});
export default rootReducer;