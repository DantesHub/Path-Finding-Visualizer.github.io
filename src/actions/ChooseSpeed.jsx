export const chooseSpeed = speed => dispatch => {
  console.log(speed);
  dispatch({
    type: speed,
    payload: speed
  });
};
