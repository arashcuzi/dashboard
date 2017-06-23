import { createStore, compose } from 'redux';

export const getStore = (rootReducer, applyMiddleware) => {
  const initialState = {};
  const enhancers = [];

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const composedEnhancers = compose(applyMiddleware, ...enhancers);

  return createStore(
    rootReducer,
    initialState,
    composedEnhancers
  );
};

export default getStore;
