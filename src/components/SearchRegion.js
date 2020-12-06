import styled from 'styled-components';
import { showRight } from '../styles/animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext, useMemo } from 'react';
import CountryContext from '../contexts/CountryContext';
import SearchContext from '../contexts/SearchContext';

const Wrapper = styled.div`
  position: relative;
  & > * {
    background-color: var(--element-color);
    box-shadow: var(--main-shadow);
    border-radius: 0.625rem;
    font-size: 0.875rem;
    font-weight: 600;
  }
`;

const Button = styled.button`
  align-items: center;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  outline: 0;
  padding: 1.375rem 1.5rem;
  width: 200px;
`;

const RegionList = styled.ul`
  animation: 0.3s ${showRight} forwards;
  padding: 1.375rem 1.25rem;
  position: absolute;
  top: 66px;
  width: 100%;
  z-index: 200;
`;

const RegionItem = styled.li`
  cursor: pointer;
  line-height: 1;
  transition: all 0.3s;

  &:hover {
    color: var(--input-text-color);
  }

  &:not(:last-child) {
    margin-bottom: 1.125rem;
  }
`;

const SearchRegion = () => {
  const [list, setList] = useState(false);
  const { region, setRegion, setValue } = useContext(SearchContext);
  const { setCountries } = useContext(CountryContext);
  const originalCountries = useMemo(
    () => JSON.parse(localStorage.getItem('countries')),
    [],
  );

  const handleRegion = ({ target }) => {
    const currentRegion = target.innerText;
    setList(!list);
    setRegion(target.innerText);
    setCountries(originalCountries);
    setCountries((countries) =>
      countries.filter((country) => country.region === currentRegion),
    );
  };

  const handleClick = () => {
    setList(!list);
    setValue('');
  };

  return (
    <Wrapper>
      <Button onClick={handleClick}>
        {region}
        <FontAwesomeIcon icon={faAngleDown} />
      </Button>
      {list && (
        <RegionList>
          <RegionItem onClick={handleRegion}>Africa</RegionItem>
          <RegionItem onClick={handleRegion}>Americas</RegionItem>
          <RegionItem onClick={handleRegion}>Asia</RegionItem>
          <RegionItem onClick={handleRegion}>Europe</RegionItem>
          <RegionItem onClick={handleRegion}>Oceania</RegionItem>
        </RegionList>
      )}
    </Wrapper>
  );
};

export default SearchRegion;
