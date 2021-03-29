import styled, { css } from 'styled-components';
import StyleContainerProps from './interface';

const Page = styled.main`
  p {
    padding: var(--size-8);
    text-align: center;
    margin-bottom: var(--size-15);
  }
`;
const Section = styled.section`
  background: var(--color-gradient-blue);
  background: var(--gradient-blue);
  padding: var(--padding-bottom-no);
  border-bottom-right-radius: var(--size-15);
  border-bottom-left-radius: var(--size-15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: var(--size-400);
  margin-bottom: var(--size-15);
  h1 {
    color: var(--color-light);
    margin-bottom: var(--size-15);
    text-align: right;
  }
  p {
    color: var(--color-light);
    width: 75%;
    text-align: left;
  }
  img {
    width: 90%;
    height: 90%;
    transform: translateY(0.3rem);
    align-self: flex-end;
  }
`;
const Routes = styled.div`
  margin-bottom: var(--size-20);
  h1 {
    color: var(--color-dark);
    padding: var(--size-15);
  }
`;
const Container: StyleContainerProps = {
  Page,
  Section,
  Routes,
};

export default Container;
