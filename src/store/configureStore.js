import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers'
import logger from 'redux-logger' // для вывода в консоль браузера состояний store и actions
import thunk from 'redux-thunk' // для ассинхронных actions

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middleware))
