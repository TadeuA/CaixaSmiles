import styled, { css } from 'styled-components';
import StyleContainerProps from './interface';

const Header = styled.header`
  border-bottom: 1px solid var(--color-inactive);
  padding-top: var(--size-40);
  display: flex;
  justify-content: space-between;
  button {
    position: absolute;
    transform: translate(5px, -30px);
    background: var(--color-transparent);
    border-radius: 50%;
    border-color: var(--color-dark);
    padding: var(--size-4);
  }
  span {
    padding: var(--padding-2-by-1);
    color: var(--color-dark);
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: var(--size-20);
  color: var(--color-dark);
  line-height: 2;
  span {
    font-size: var(--size-14);
    margin-bottom: var(--size-20);
  }
  aside {
    display: initial;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    input,
    img {
      width: 5rem;
    }
    input {
      font-size: var(--size-8);
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: var(--padding-2-by-1);
  button {
    margin-bottom: 2rem;
  }
`;

const Section = styled.section`
  ${({ active }) =>
    !active &&
    css`
      display: none;
    `}
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  div {
    height: 63%;
    width: 90%;
    background-color: var(--color-background);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Container: StyleContainerProps = {
  Header,
  Main,
  Footer,
  Section,
};

export default Container;
