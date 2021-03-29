import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  color: var(--color-dark);

  div {
    display: flex;
    flex-direction: column;
    padding: var(--size-15);
    line-height: 2;

    strong {
      color: var(--color-primary);
    }
    span {
      font-size: var(--size-12);
    }
    p {
      margin-top: var(--size-20);
      margin-bottom: var(--size-20);
    }
    button {
      margin-top: var(--size-20);
    }
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(1.2rem, 1.2rem);
  background: 0;
  border-radius: 50%;
  padding: var(--size-8);
`;
export default Container;
