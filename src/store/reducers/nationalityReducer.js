import {
  UNSET_NATIONALITY,
  SET_NATIONALITY,
} from "../actions/nationalityActions";

const initialState = ["es", "gb", "ch", "fr"];

const nationalityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NATIONALITY:
      if (!state.includes(action.payload)) return [...state, action.payload];
      return state;
    case UNSET_NATIONALITY:
      if (state.includes(action.payload))
        return state.filter((item) => item !== action.payload);
      return state;
    default:
      return state;
  }
};

export default nationalityReducer;
