import { combineReducers } from 'redux'
import nationalityReducer from './nationalityReducer'
import modalReducer from './modalReducer'

export default combineReducers({
  nationalityReducer,
  modalReducer
})