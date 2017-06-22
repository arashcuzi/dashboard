const createConnection = (actions, reduxStore) => {
  // Set up the websocket.
  var wsc = new WebSocket('ws://174.138.56.13/:3001/');

  actions.forEach((action) => {
    // Setup the event listener for each 
    wsc.addEventListener('message', (m) => {
      const data = m.data ? JSON.parse(m.data) : {};

      if (data.type && data.payload) {
        reduxStore.dispatch({ type: data.type, payload: data.payload });
      }
    });
  });

  return wsc;
};

export default createConnection;
