import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CountryContext from '../contexts/CountryContext';
import { useContext, useMemo, useRef } from 'react';
import SearchContext from '../contexts/SearchContext';

const Form = styled.form`
  max-width: 100%;
  position: relative;
`;

const Input = styled.input`
  background-color: var(--element-color);
  border: none;
  border-radius: 0.625rem;
  box-shadow: var(--main-shadow);
  color: var(--text-color);
  font-size: 0.875rem;
  font-weight: 300;
  margin-bottom: 3rem;
  max-width: 100%;
  outline: none;
  padding: 1.375rem 1.5rem 1.375rem 4.5rem;
  width: 480px;
`;

const SearchForm = () => {
  const { value, setValue, region, setRegion } = useContext(SearchContext);
  const { setCountries } = useContext(CountryContext);
  const debounceRef = useRef();
  const originalCountries = useMemo(
    () => JSON.parse(localStorage.getItem('countries')),
    [],
  );

  const handleKeyUp = () => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const term = value.toLowerCase().trimStart().trimEnd();
      setCountries(originalCountries);
      setCountries((country) =>
        country.filter(
          ({ name, nativeName }) =>
            name.toLowerCase().includes(term) ||
            nativeName.toLowerCase().includes(term),
        ),
      );
      debounceRef.current = null;
    }, 500);
  };

  const handleChange = ({ target }) => {
    setValue(target.value);
    if (region !== 'Filter by Region') setRegion('Filter by Region');
  };

  const handleFocus = () => {
    if (region !== 'Filter by Region') setRegion('Filter by Region');
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Input
        autoComplete="off"
        aria-label="Search by text"
        spellCheck="false"
        type="text"
        name="Search"
        id="search"
        placeholder="Search for a country..."
        value={value}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        onFocus={handleFocus}
      />
      <FontAwesomeIcon
        style={{
          position: 'absolute',
          left: 'calc(2.25rem - 9px)',
          top: '1.375rem',
          width: '18px',
          height: '18px',
        }}
        icon={faSearch}
      />
    </Form>
  );
};

export default SearchForm;
