import styled, { css } from 'styled-components';
import CardStyleProps from './interface';

const Container = styled.section<CardStyleProps>`
  background: var(--color-inactive);
  border-radius: var(--size-15);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: var(--size-159);
  width: var(--size-135);

  ${({ image }) =>
    image &&
    css`
      background: url(${image});
      background-size: cover;
    `}
  button {
    align-self: flex-end;
    margin: var(--size-8);


    }
    strong {
      font-size: var(--size-14);
      background: var(--color-dark);
      opacity: 0.8;
      padding: var(--size-4);
      border-bottom-right-radius: var(--size-15);
      border-bottom-left-radius: var(--size-15);
      min-height: 30px;
    }
  }
`;

export const Button = styled.button`
  margin: 0;
  align-self: center;
  background: none;
  border: none;
  height: 100px;
  width: var(--size-135);
  transform: translate(-55%, -100%);
  position: absolute;
`;
export default Container;
