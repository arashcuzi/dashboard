export const createConnection = (actions, reduxStore) => {
  // Set up the websocket.
  var wsc = new WebSocket('ws://localhost:3001/');
  
  actions.forEach((action) => {
    // Setup the event listener for each 
    wsc.addEventListener(action, (m) => {
      reduxStore.dispatch({ type: m.data.type, payload: m.data.payload });
    });
  });

  return wsc;
};