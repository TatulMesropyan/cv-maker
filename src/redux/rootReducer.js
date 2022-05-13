import  {combineReducers}  from "@reduxjs/toolkit";
import  personalDataReducer  from '../redux/Reducers/personalDataReducer'
import  certificateDataReducer  from '../redux/Reducers/certificateDataReducer'
import  educationDataReducer from '../redux/Reducers/educationDataReducer'
import  languageDataReducer  from '../redux/Reducers/languageDataReducer'
import  projectDataReducer  from '../redux/Reducers/projectDataReducer'
import  skillsDataReducer  from '../redux/Reducers/skillsDataReducer'
import  workDataReducer  from '../redux/Reducers/workDataReducer'

const rootReducer = combineReducers({
  personalDataReducer,
  certificateDataReducer,
  educationDataReducer,
  languageDataReducer,
  projectDataReducer,
  skillsDataReducer,
  workDataReducer
})
export default rootReducer;