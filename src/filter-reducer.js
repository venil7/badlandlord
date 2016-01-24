const filterReducer = (state = false, action) => {
  switch (action.type) {
    case 'FILTER': {
      if (!action.filter) {
        return false;
      }

      return action.filter;
    }
    default: return state;
  }
};

export { filterReducer };