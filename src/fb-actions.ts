// fb action creators
const fbChangeStatus = (status) => {
  return {
    type: 'FB-STATUS',
    status
  };
}

export { fbChangeStatus };