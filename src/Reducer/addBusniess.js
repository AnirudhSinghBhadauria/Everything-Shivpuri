export const INITIAL_STATE = {
  name: "NAME GOES HERE",
  phone: "PHONE NUMBER OF BUSNIESS",
  location: "LOCATION OF BUSNIESS",
  imgStatus: 'false',

  imgName: "",
  imgSize: '',
  imgSrc: "",
  width: "",
  height: "",
  category: "",
  file: "",
  error: "",
};

export const busniessReducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "PHONE":
      return {
        ...state,
        phone: action.payload,
      };
    case "LOC":
      return {
        ...state,
        location: action.payload,
      };
    case "FILE":
      return {
        ...state,
        file: action.payload,
      };
    case "IMG-NAME":
      return {
        ...state,
        imgName: action.payload,
      };
    case "IMG-SRC":
      return {
        ...state,
        imgSrc: action.payload,
      };
    case "IMG-SIZE":
      return {
        ...state,
        imgSize: action.payload,
      };
    case "IMG-STATUS":
      return {
        ...state,
        imgStatus: action.payload,
      };
    case "WIDTH":
      return {
        ...state,
        width: action.payload,
      };
    case "HEIGHT":
      return {
        ...state,
        height: action.payload,
      };
    case "CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
