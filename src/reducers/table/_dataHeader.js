const TYPE_SORT_DEFAULT = 'TYPE_SORT_DEFAULT'

const initialState = {
  tableColumns: [
    { name: 'id', sort: TYPE_SORT_DEFAULT },
    { name: 'firstName', sort: TYPE_SORT_DEFAULT },
    { name: 'lastName', sort: TYPE_SORT_DEFAULT },
    { name: 'email', sort: TYPE_SORT_DEFAULT },
    { name: 'phone', sort: TYPE_SORT_DEFAULT },
  ],
}

export function dataHeaderReducer(state = initialState, action) {
  // switch (action.type) {
  //   case GET_DATA_SUCCESS:
  //     return {
  //       ...state,
  //       data: action.payload,
  //     }
  //   default:
  //     return state
  // }

  return state
}
