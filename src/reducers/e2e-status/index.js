import clone from '../../modules/clone';

export const E2E_STATUS = 'E2E_STATUS';

const initialState = {
  status: 'PASS',
};

export const e2eStatus = (state = initialState, action) => {
  const newState = clone(state);
  
  switch (action.type) {
    case E2E_STATUS:
      return {
        ...newState,
        status: action.payload.status,
      }

    default:
      return newState;
  }
};
