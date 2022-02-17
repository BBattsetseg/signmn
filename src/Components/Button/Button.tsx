import { Children } from '../../Types/types';
import { ButtonStyle } from './Button.style';

type BtnType = {
  onClick: () => void;
};

export const Button = ({ children, onClick }: Children & BtnType) => {
  return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
};
