import styled from 'styled-components';
import Side from './Side.js';

const LeftSideStyled = styled(Side)`
  left: 0;
  background-color: rgb(0, 12, 29);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  @media (max-width: 1400px) {
    position: static;
    width: 100%;
    overflow: visible;
  }
`;

export default LeftSideStyled;
