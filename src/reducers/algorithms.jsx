const initialState = {
  algo: "dijkstra"
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "dijkstra":
      return {
        ...state,
        algo: payload
      };
    case "aStar":
      return {
        ...state,
        algo: payload
      };
    case "bfs":
      return {
        ...state,
        algo: payload
      };
    case "dfs":
      return {
        ...state,
        algo: payload
      };
    default:
      return state;
  }
}
