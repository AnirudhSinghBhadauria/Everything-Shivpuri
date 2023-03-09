export const INITIAL_STATE = {
  message: {
    value: "",
    status: "",
  },
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "MESSAGE":
      return {
        ...state,
        message: action.payload,
      };
  }
};
