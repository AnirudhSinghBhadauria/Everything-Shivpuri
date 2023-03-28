export const INITIAL_STATE = {
  message: {
    value: "",
    status: "",
  },
  curruntUser: "",
  sidebar: false,
  barClasses: ``,
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
    case "SIDEBAR":
      return {
        ...state,
        sidebar: action.payload,
      };
    case "BAR-CLASSES":
      return {
        ...state,
        barClasses: action.payload,
      };
    default:
      return state;
  }
};
