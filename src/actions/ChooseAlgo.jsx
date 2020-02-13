export const chooseAlgo = algo => dispatch => {
  console.log(algo);
  dispatch({
    type: algo,
    payload: algo
  });
  dispatch({
    type: "NORMALIZE",
    payload: ""
  });
};
