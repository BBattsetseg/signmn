import { types } from '@babel/core';
import { Children } from '../../Types/types';
import { LinkType } from '../Nav/NavLink/NavLink.style';
import { ButtonStyle } from './Button.style';

type BtnType = {
  onClick: () => void;
};

export const Button = ({ children, onClick, ...rest }: Children & BtnType & LinkType) => {
  return (
    <ButtonStyle onClick={onClick} {...rest}>
      {children}
    </ButtonStyle>
  );
};
