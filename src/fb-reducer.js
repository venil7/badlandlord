const defaultState = {
  authenticated: false,
};

const fbReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FB-STATUS': {
      let authenticated = !!action.status.accessToken;
      return Object.assign({ authenticated }, action.status);
    }
    default: return state;
  }
};

export { fbReducer };