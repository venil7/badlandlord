// filter action creators
const filter = (text) => {
  return {
    type: 'FILTER',
    filter: text
  };
}

export { filter };