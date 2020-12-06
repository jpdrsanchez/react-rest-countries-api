import { keyframes } from 'styled-components';

export const show = keyframes`
  to {
    opacity: 1;
  }
`;

export const showRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const loading = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

export const showPage = keyframes`
  to {
    transform: none;
  }
`;
