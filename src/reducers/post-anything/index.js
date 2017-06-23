import clone from '../../modules/clone';

export const POST_ANYTHING = 'POST_ANYTHING';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';

const initialState = {
  messages: []
};

export const postAnything = (state = initialState, action) => {
  const newState = clone(state);
  const messages = newState.messages.filter((el, i) => i < 2);

  switch (action.type) {
    case POST_ANYTHING:
      return {
        ...newState,
        messages: [
          {
            message: action.payload.message,
            user: action.payload.user
          },
          ...messages
        ]
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
