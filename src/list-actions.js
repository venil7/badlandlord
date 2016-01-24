// list action creators
const fetchList = () => {
  return {
    type: 'FETCH'
  };
}

const receiveList = (json) => {
  return {
    type: 'FETCHED',
    list: json.items
  };
};

const fetchThunk = () => (dispatch) => {
  return fetch(`/data/data.json`)
    .then((response) => response.json())
    .then((json) => dispatch(receiveList(json)));
};

export { fetchList, receiveList, fetchThunk };