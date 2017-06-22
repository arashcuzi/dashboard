export const POST_ANYTHING = 'POST_ANYTHING'

const initialState = {
  message: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_ANYTHING:
      return {
        ...state,
        message: action.payload
      }

    default:
      return state
  }
}

export const postAnything = (msg) => {
  return dispatch => {
    dispatch({
      type: POST_ANYTHING,
      payload: msg
    })
  }
}
