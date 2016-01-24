const detailsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'DETAILS': {
      return action.details;
    }
    default: return state;
  }
};

export { detailsReducer };