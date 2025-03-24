// reducers/countryReducer.js
import { FETCH_COUNTRIES } from "../actions/countryActions";

const initialState = {
  countries: [],
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    default:
      return state;
  }
};

export default countryReducer;