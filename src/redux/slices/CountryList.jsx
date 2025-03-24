import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries } from "../actions/countryActions";



const CountryList = () => {
  const dispatch = useDispatch();
  
  // Get countries from Redux state
  const countries = useSelector((state) => state.countries.countries);

  // Fetch countries data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      dispatch(fetchCountries(data));
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>Country List</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.cca3}>
            {country.name.common}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
