import  {combineReducers}  from "@reduxjs/toolkit";
import  formDataReducer  from '../redux/Reducers/formDataReducer';
import  templateDataReducer  from '../redux/Reducers/templateDataReducer';

const rootReducer = combineReducers({
  formDataReducer,
  templateDataReducer
});
export default rootReducer;