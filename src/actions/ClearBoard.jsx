export const clearBoard = () => dispatch => {
  dispatch({
    type: "CLEAR_BOARD",
    payload: "clear"
  });
};
