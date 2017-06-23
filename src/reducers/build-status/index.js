import clone from '../../modules/clone';

export const BUILD_STATUS = 'BUILD_STATUS';

const initialState = {
  status: 'PASS',
};

export const buildStatus = (state = initialState, action) => {
  const newState = clone(state);
  
  switch (action.type) {
    case BUILD_STATUS:
      return {
        ...newState,
        status: action.payload.status,
        user: action.payload.user,
      }

    default:
      return newState;
  }
};
