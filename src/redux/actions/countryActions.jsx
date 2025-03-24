// actions/countryActions.js
export const FETCH_COUNTRIES = "FETCH_COUNTRIES";

export const fetchCountries = (countries) => {
  return {
    type: FETCH_COUNTRIES,
    payload: countries,
  };
};
