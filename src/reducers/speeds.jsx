const initialState = {
  speed: "fast"
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "slow":
      return {
        ...state,
        speed: payload
      };
    case "medium":
      return {
        ...state,
        speed: payload
      };
    case "fast":
      return {
        ...state,
        speed: payload
      };
    default:
      return state;
  }
}
