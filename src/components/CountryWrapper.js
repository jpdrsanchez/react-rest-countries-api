import styled from 'styled-components';
import Container from './Container';
import CountryCard from './CountryCard';
import CountryContext from '../contexts/CountryContext';
import { useContext, useEffect, useState } from 'react';
import Loading from './Loading';
import { show } from '../styles/animations';

const StyledWrapper = styled.section`
  animation: ${show} 0.3s forwards;
  opacity: 0;
  padding-bottom: 2.625rem;
`;

const CountryList = styled.ul`
  align-items: stretch;
  column-gap: 4.75rem;
  display: grid;
  grid-template-columns: 100%;
  row-gap: 2.625rem;

  @media (max-width: 499px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Error = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  grid-column: span 4;
  text-align: center;
`;

const CountryWrapper = () => {
  const { countries, loading, setLoading } = useContext(CountryContext);
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.pageYOffset);
  };

  useEffect(() => {
    setLoading(false);
    return () => {
      setLoading(true);
    };
  }, [setLoading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (loading) return <Loading />;
  else
    return (
      <StyledWrapper>
        <Container>
          <CountryList>
            {!countries.length ? (
              <Error>Sorry, no results match your search criteria =(</Error>
            ) : (
              countries.map(
                ({ alpha3Code, name, flag, population, region, capital }) => (
                  <CountryCard
                    key={alpha3Code}
                    code={alpha3Code}
                    image={flag}
                    name={name}
                    population={population}
                    region={region}
                    capital={capital}
                    scroll={scroll}
                  />
                ),
              )
            )}
          </CountryList>
        </Container>
      </StyledWrapper>
    );
};

export default CountryWrapper;
