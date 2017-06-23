import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import fullScreen from '../../sagas/full-screen';

export const getStore = (rootReducer) => {
  const saga = createSagaMiddleware();
  const initialState = {};
  let devTools;

  if (process.env.NODE_ENV === 'development' && typeof window.devToolsExtension === 'function') {
    devTools = window.devToolsExtension;
  }

  const result = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(saga), devTools())
  );

  // Init sagas
  saga.run(fullScreen);

  return result;
};

export default getStore;
