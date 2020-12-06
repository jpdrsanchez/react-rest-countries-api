import { createContext, useEffect, useState } from 'react';

const CountryContext = createContext();
export default CountryContext;

export const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllCountries = async () => {
    const fetchCountries = await fetch('https://restcountries.eu/rest/v2/all');
    const toJson = await fetchCountries.json();
    localStorage.setItem('countries', JSON.stringify(toJson));
    setCountries((country) => [...country, ...toJson]);
  };

  useEffect(() => {
    if (!localStorage.getItem('countries')) {
      getAllCountries();
    } else {
      const json = JSON.parse(localStorage.getItem('countries'));
      setCountries((country) => [...country, ...json]);
    }
  }, []);

  return (
    <CountryContext.Provider
      value={{ countries, setCountries, loading, setLoading }}
    >
      {children}
    </CountryContext.Provider>
  );
};
