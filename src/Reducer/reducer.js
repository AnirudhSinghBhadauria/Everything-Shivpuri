export const INITIAL_STATE = {
  copied: false,
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "COPIED":
      return {
        ...state,
        copied: action.payload,
      };
  }
};
