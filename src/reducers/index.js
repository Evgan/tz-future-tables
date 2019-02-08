import { combineReducers } from 'redux'
import { dataReducer } from './data'
import { getDataReducer } from './getData'

export const rootReducer = combineReducers({
  data: dataReducer,
  getData: getDataReducer,
})
