import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from "../actions/types";

const mapKeys = (arrayOfObj, key) => {
  const initialArray = [...arrayOfObj];
  const finalObj = {};
  initialArray.forEach(obj => {
    finalObj[obj[key]] = obj;
  });
  return finalObj;
};

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ...mapKeys(action.payload, "id") };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      const tempState = { ...state };
      delete tempState[action.payload];
      return tempState;
    default:
      return state;
  }
};
