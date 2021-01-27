import { combineReducers } from 'redux'
import RequestReducer from './RequestReducer'

export default combineReducers({
  requests: RequestReducer
})