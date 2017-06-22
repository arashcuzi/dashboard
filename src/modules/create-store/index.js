import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers';

const getStore = () => {
  const initialState = {};
  const enhancers = [];

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const composedEnhancers = compose(...enhancers);

  createStore(
    rootReducer(),
    initialState,
    composedEnhancers,
  );
};

export default store;
