import { InputHTMLAttributes } from 'react';
import { ThemedStyledFunction } from 'styled-components';
import DefaultButton from './DefaultButton';
import Input from './Input';
import BookmarkButton from './BookmarkButton';

export default interface ExportProps {
  DefaultButton: typeof DefaultButton;
  Input: typeof Input;
  BookmarkButton: typeof BookmarkButton;
}

export interface InputProps extends InputHTMLAttributes {
  name: string;
}

export interface StyleContainerProps {
  Input: ThemedStyledFunction;
  BookmarkButton: ThemedStyledFunction;
}

export interface BookmarkButtonStyleProps {
  active: boolean;
}
