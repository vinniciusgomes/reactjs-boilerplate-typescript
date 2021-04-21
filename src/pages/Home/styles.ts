import styled from 'styled-components';
import { textColorPrimary } from 'styles';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 5.4rem;
    color: ${textColorPrimary};
    margin-top: 4rem;
  }

  p {
    margin-top: 2.4rem;
    font-size: 2.4rem;
    line-height: 3.2rem;
  }
`;

export const Header = styled.header`
  input {
    margin-right: 1rem;
  }

  text-transform: capitalize;
`;
