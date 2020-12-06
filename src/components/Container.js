import styled from 'styled-components';

const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  max-width: var(--container-width);
`;

const Container = ({ className, children }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
