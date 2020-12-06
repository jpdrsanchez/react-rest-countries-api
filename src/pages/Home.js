import CountryWrapper from '../components/CountryWrapper';
import Header from '../components/Header';
import Search from '../components/Search';
import { SearchProvider } from '../contexts/SearchContext';

const Home = () => {
  return (
    <>
      <Header />
      <SearchProvider>
        <Search />
      </SearchProvider>
      <CountryWrapper />
    </>
  );
};

export default Home;
