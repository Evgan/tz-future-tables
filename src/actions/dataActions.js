import request from 'ajax-request'

export const GET_DATA_REQUEST = 'GET_DATA_REQUEST'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE'

export function getData(e) {
  return dispatch => {
    dispatch({
      type: GET_DATA_REQUEST,
      payload: e.type,
    })

    request(
      {
        url: e.url,
        method: 'GET',
        json: true,
      },
      function(err, res, body) {
        if (err) {
          dispatch({
            type: GET_DATA_FAILURE,
            payload: err,
          })
        } else if (body) {
          dispatch({
            type: GET_DATA_SUCCESS,
            payload: body,
          })
        }
      }
    )
  }
}
