import { combineReducers } from 'redux'
import { dataReducer } from './data'
import { getDataReducer } from './getData'
import { preloaderReducer } from './preloader'

export const rootReducer = combineReducers({
  data: dataReducer,
  getData: getDataReducer,
  preloader_my: preloaderReducer,
})
