import {combineReducers} from "@reduxjs/toolkit";
import { personalDataReducer } from './Reducers/personalDataReducer'
import languageDataReducer from './Reducers/languageDataReducer'

const rootReducer = combineReducers({
  personalDataReducer,languageDataReducer})
export default rootReducer;