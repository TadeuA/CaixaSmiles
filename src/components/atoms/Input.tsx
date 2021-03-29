import React, { FC } from 'react';
import Container from './styles';
import { InputProps } from './interface';

const Input: FC<InputProps> = ({ name, ...rest }: InputProps) => {
  return <Container.Input name={name} {...rest} />;
};

export default Input;
