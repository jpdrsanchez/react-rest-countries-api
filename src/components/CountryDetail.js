import styled from 'styled-components';
import Container from './Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import CountryContext from '../contexts/CountryContext';
import { useContext, useEffect, useMemo } from 'react';
import { showPage } from '../styles/animations';

const StyledCountry = styled.section`
  padding-bottom: 2rem;
  padding-top: 2rem;
  position: relative;

  @media (min-width: 900px) {
    padding-bottom: 5rem;
    padding-top: 5rem;
  }
`;

const CountryContainer = styled(Container)`
  animation: ${showPage} 0.5s forwards;
  transform: translateX(-100%);

  @media (min-width: 900px) {
    align-items: center;
    column-gap: 4rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 5rem;
  }
`;

const BackButton = styled(Link)`
  align-items: center;
  background-color: var(--element-color);
  border: 0;
  border-radius: 0.25rem;
  box-shadow: var(--button-shadow);
  color: var(--text-color);
  cursor: pointer;
  display: flex;
  font-size: 0.875rem;
  grid-column: 1 / 3;
  justify-content: center;
  max-width: 135px;
  outline: none;
  padding: 0.75rem 1rem;
  width: auto;

  @media (max-width: 899px) {
    margin-bottom: 4rem;
  }
`;

const CountryImage = styled.img`
  @media (max-width: 899px) {
    margin: 0 auto 2rem auto;
  }
`;

const CountryTitle = styled.h2`
  font-size: 1rem;
  font-weight: 800;
  margin-bottom: 2.5rem;

  @media (min-width: 600px) {
    font-size: 1.5rem;
  }
`;

const InformationList = styled.ul`
  column-gap: 2rem;
  display: grid;
  grid-template-columns: 100%;
  margin-bottom: 4.75rem;
  row-gap: 1rem;

  @media (min-width: 600px) {
    grid-auto-flow: dense;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const InformationItem = styled.li`
  font-size: 0.875rem;
  span:first-of-type {
    font-weight: 800;
  }

  &:nth-child(-n + 5) {
    grid-column: 1;
  }

  &:nth-child(5) {
    @media (max-width: 599px) {
      margin-bottom: 5rem;
    }
  }
`;

const BordersWrapper = styled.div`
  @media (min-width: 600px) {
    display: flex;
    align-items: center;
  }
`;

const BorderText = styled.span`
  font-weight: 800;
  font-size: 0.875rem;
  margin-right: 0.625rem;
  @media (max-width: 599px) {
    display: block;
    margin-bottom: 2.875rem;
  }
`;

const BorderList = styled.ul`
  display: grid;
  grid-gap: 0.625rem;
  grid-template-columns: repeat(2, auto);
  justify-content: start;

  @media (max-width: 899px) {
    grid-template-columns: repeat(3, auto);
    justify-content: center;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, auto);
  }
`;

const BorderItem = styled.li`
  align-items: center;
  background-color: var(--element-color);
  border-radius: 0.25rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  display: flex;
  font-size: 0.875rem;
  justify-content: center;
  padding: 0.625rem 1.25rem;
`;

const BorderLink = styled(Link)`
  color: var(--text-color);
`;

const CountryDetail = ({ current }) => {
  const [country] = current;
  const { setCountries } = useContext(CountryContext);
  const countries = useMemo(
    () => JSON.parse(localStorage.getItem('countries')),
    [],
  );

  useEffect(() => {
    setCountries(countries);
  }, [setCountries, countries]);

  return (
    <StyledCountry>
      <CountryContainer>
        <BackButton to="/">
          <FontAwesomeIcon
            icon={faLongArrowAltLeft}
            style={{ marginRight: '0.625rem' }}
          />
          Back
        </BackButton>
        <CountryImage src={country.flag} alt={current.name} />
        <div>
          <CountryTitle>{country.name}</CountryTitle>
          <InformationList>
            <InformationItem>
              <span>Native Name: </span>
              <span>{country.nativeName}</span>
            </InformationItem>
            <InformationItem>
              <span>Population: </span>
              <span>{country.population.toLocaleString('en-US')}</span>
            </InformationItem>
            <InformationItem>
              <span>Region: </span>
              <span>{country.region}</span>
            </InformationItem>
            <InformationItem>
              <span>Sub Region: </span>
              <span>{country.subregion}</span>
            </InformationItem>
            <InformationItem>
              <span>Capital: </span>
              <span>{country.capital}</span>
            </InformationItem>
            <InformationItem>
              <span>Top Level Domain: </span>
              <span>{country.topLevelDomain.join(', ')}</span>
            </InformationItem>
            <InformationItem>
              <span>Currencies: </span>
              <span>
                {country.currencies
                  .map((currencie) => currencie.name)
                  .join(', ')}
              </span>
            </InformationItem>
            <InformationItem>
              <span>Languages: </span>
              <span>
                {country.languages.map((language) => language.name).join(', ')}
              </span>
            </InformationItem>
          </InformationList>
          <BordersWrapper>
            <BorderText>Border Countries: </BorderText>
            <BorderList>
              {country.borders.map((border) => (
                <BorderItem key={border}>
                  <BorderLink to={`/country/${border.toLowerCase()}`}>
                    {countries
                      .filter(({ alpha3Code }) => alpha3Code === border)
                      .map((country) => country.name)}
                  </BorderLink>
                </BorderItem>
              ))}
            </BorderList>
          </BordersWrapper>
        </div>
      </CountryContainer>
    </StyledCountry>
  );
};

export default CountryDetail;
