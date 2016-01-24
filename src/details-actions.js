// details action creators

const receiveDetails = (details) => {
  return {
    type: 'DETAILS',
    details
  };
};

const detailsThunk = (index) => (dispatch) => {
  return fetch(`/data/data.json?index=${index}`)
    .then((response) => response.json())
    .then((json) => {
      let { items } = json;
      return items.find(x => x.index == index);
    })
    .then((details) => dispatch(receiveDetails(details)));
};

export { receiveDetails, detailsThunk };