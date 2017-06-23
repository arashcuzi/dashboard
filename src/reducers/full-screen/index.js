import clone from '../../modules/clone';

export const FULL_SCREEN = 'FULL_SCREEN';

const initialState = false;

export const fullScreen = (state = initialState, action) => {
  switch (action.type) {
    case FULL_SCREEN:
      return action.payload;

    default:
      return state;
  }
};
