import styled, { css } from 'styled-components';
import { StyleContainerProps, BookmarkButtonStyleProps } from './interface';

const Input = styled.input`
  padding: var(--padding-2-by-1);
  margin-bottom: var(--size-15);
`;

const BookmarkButton = styled.button<BookmarkButtonStyleProps>`
  border-radius: 50%;
  background: var(--color-transparent);
  border-width: var(--size-2);
  border-style: solid;
  border-color: var(--color-light);
  padding: var(--size-);
  translate: border-color 0.5s;
  padding: var(--size-6);
  svg {
    color: var(--color-light);
  }

  ${({ active }) =>
    active &&
    css`
      border-color: var(--color-primary);
      svg {
        color: var(--color-primary);
      }
    `}
`;

const Container: StyleContainerProps = {
  Input,
  BookmarkButton,
};

export default Container;
