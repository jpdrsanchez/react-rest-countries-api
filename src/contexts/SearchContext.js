import { createContext, useState } from 'react';

const SearchContext = createContext();
export default SearchContext;

export const SearchProvider = ({ children }) => {
  const [region, setRegion] = useState('Filter by Region');
  const [value, setValue] = useState('');

  return (
    <SearchContext.Provider value={{ region, setRegion, value, setValue }}>
      {children}
    </SearchContext.Provider>
  );
};
