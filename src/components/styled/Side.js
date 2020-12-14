import styled from 'styled-components';

const Side = styled.div`
  position: fixed;
  top: 0;
  width: 50%;
  height: 100%;
  overflow: auto;

  @media (max-width: 1400px) {
      position: static;
      width: 100%;
      overflow: visible;
  }


`;

export default Side;
