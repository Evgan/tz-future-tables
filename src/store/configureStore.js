import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers'
import logger from 'redux-logger' // для вывода в консоль браузера состояний store и actions
import thunk from 'redux-thunk' // для ассинхронных actions

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))
