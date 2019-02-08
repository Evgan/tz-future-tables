import { GET_DATA_SUCCESS } from '../actions/dataActions'

const initialState = {
  data: [],
  maxRows: 20,
}

export function dataReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state
  }
}
