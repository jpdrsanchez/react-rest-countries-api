import Container from './Container';
import styled from 'styled-components';
import { memo } from 'react';
import ThemeSwitch from './ThemeSwitch';

const StyledHeader = styled.header`
  background-color: var(--element-color);
  box-shadow: var(--main-shadow);
  padding-bottom: 1.875rem;
  padding-top: 1.875rem;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 1rem;
  font-weight: 800;

  @media (min-width: 700px) {
    font-size: 1.5rem;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Title>Where in the world?</Title>
        <ThemeSwitch />
      </HeaderContainer>
    </StyledHeader>
  );
};

export default memo(Header);
