const initialState = {
  button: "",
  clicked: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "VISUALIZE":
      return {
        ...state,
        button: payload
      };
    case "CLEAR_BOARD":
      return {
        ...state,
        button: payload
      };
    default:
      return state;
  }
}
