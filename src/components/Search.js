import styled from 'styled-components';
import Container from './Container';
import SearchForm from './SearchForm';
import SearchRegion from './SearchRegion';

const StyledSearch = styled.section`
  padding-top: 3rem;
`;

const SearchContainer = styled(Container)`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Search = () => {
  return (
    <StyledSearch>
      <SearchContainer>
        <SearchForm />
        <SearchRegion />
      </SearchContainer>
    </StyledSearch>
  );
};

export default Search;
