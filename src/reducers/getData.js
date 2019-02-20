import { GET_DATA_FAILURE } from '../actions/dataActions'

const initialState = {
  urlsGetData: [
    {
      type: 'Много данных',
      url:
        'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
    },
    {
      type: 'Мало данных',
      url:
        'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
    },
  ],
  errorLoadData: '',
}

export function getDataReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_FAILURE:
      return { ...state, errorLoadData: action.payload }
    default:
      return state
  }
}
