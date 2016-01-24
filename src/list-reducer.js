const listReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH': {
      return state;
    }
    case 'FETCHED': {
      return action.list;
    }
    default: return state;
  }
};

export { listReducer };