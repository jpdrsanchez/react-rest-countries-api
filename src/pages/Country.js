import CountryDetail from '../components/CountryDetail';
import CountryContext from '../contexts/CountryContext';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

const Country = () => {
  const { id } = useParams();
  const { countries } = useContext(CountryContext);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    setCountry(
      countries.filter(({ alpha3Code }) => alpha3Code.toLowerCase() === id),
    );
  }, [id, countries]);

  return (
    <>
      <Header />
      {country.length ? <CountryDetail current={country} /> : <Loading />}
    </>
  );
};

export default Country;
