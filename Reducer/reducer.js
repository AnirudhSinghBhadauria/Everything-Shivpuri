export const INITIAL_STATE = {
  message: {
    value: "",
    status: "",
  },
  curruntUser: "",
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "MESSAGE":
      return {
        ...state,
        message: action.payload,
      };
    case "USER":
      return {
        ...state,
        curruntUser: action.payload,
      };
    default:
      return state;
  }
};
