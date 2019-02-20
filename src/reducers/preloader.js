import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from '../actions/dataActions'

export const PRELOADER_SHOW = 'PRELOADER_SHOW'
export const PRELOADER_HIDE = 'PRELOADER_HIDE'
const initialState = {
  status: PRELOADER_HIDE,
}

export function preloaderReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
        status: PRELOADER_SHOW,
      }
    case GET_DATA_SUCCESS:
    case GET_DATA_FAILURE:
      return {
        ...state,
        status: PRELOADER_HIDE,
      }
    default:
      return state
  }
}
