import clone from '../../modules/clone';

export const POST_ANYTHING = 'POST_ANYTHING';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';

const initialState = {
  message: '',
  user: ''
};

export const postAnything = (state = initialState, action) => {
  const newState = clone(state);

  switch (action.type) {
    case POST_ANYTHING:
      return {
        ...newState,
        message: action.payload.message,
        user: action.payload.user
      }

    case CLEAR_MESSAGE:
      return {
        ...newState,
        message: '',
        user: ''
      }

    default:
      return newState;
  }
};
