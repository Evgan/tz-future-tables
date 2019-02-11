import { combineReducers } from 'redux'
import { getDataReducer } from './getData'
import { preloaderReducer } from './preloader'
import { dataTableReducer } from './dataTable'

export const rootReducer = combineReducers({
  dataTable: dataTableReducer,
  getData: getDataReducer,
  preloader_my: preloaderReducer,
})
