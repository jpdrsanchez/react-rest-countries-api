import styled from 'styled-components';
import { loading } from '../styles/animations';

const LoadingWrapper = styled.div`
  padding: 5rem 1rem;
`;

const Spinner = styled.div`
  animation: ${loading} 0.5s infinite;
  border: 0.25rem solid var(--element-color);
  border-radius: 50%;
  border-top-color: var(--text-color);
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  width: 40px;
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <Spinner />
    </LoadingWrapper>
  );
};

export default Loading;
