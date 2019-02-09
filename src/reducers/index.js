import { combineReducers } from 'redux'
import { getDataReducer } from './getData'
import { preloaderReducer } from './preloader'
// import { dataHeaderReducer } from './table/dataHeader'
import { dataBodyReducer } from './table/dataBody'

export const rootReducer = combineReducers({
  //dataHeader: dataHeaderReducer,
  dataBody: dataBodyReducer,
  getData: getDataReducer,
  preloader_my: preloaderReducer,
})
