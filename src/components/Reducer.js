let initialState = false;

const darkReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DARK":
      return !state;
    default:
      return state;
  }
};
export default darkReducer;
