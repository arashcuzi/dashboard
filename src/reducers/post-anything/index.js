import clone from '../../modules/clone';

export const POST_ANYTHING = 'POST_ANYTHING';

const initialState = {
  message: ''
};

export const postAnything = (state = initialState, action) => {
  const newState = clone(state);

  switch (action.type) {
    case POST_ANYTHING:
      return {
        ...newState,
        message: action.payload,
      }

    default:
      return newState;
  }
};
