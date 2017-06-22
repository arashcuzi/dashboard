export const GET_WEATHER = 'GET_WEATHER'

const initialState = {
  temp: 70,
  gettingWeather: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        temp: action.temp
      }

    case GET_WEATHER_REQUESTED:
      return {
        ...state,
        gettingWeather: true
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }

    default:
      return state
  }
}

export const getWeather = () => {
  return dispatch => {
    dispatch({
      type: GET_WEATHER
    })

    dispatch({
      type: INCREMENT
    })
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: GET_WEATHER
    })

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, 3000)
  }
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    dispatch({
      type: DECREMENT
    })
  }
}
