const initialState = {
  algo: "testing",
  clicked: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "VISUALIZE":
      return {
        ...state,
        algo: payload
      };
    default:
      return state;
  }
}
