import { FunctionComponent, ReactChild, ReactNode } from 'react';

export type AnchorArray = {
  ids: string[];
};
export type Anchor = {
  id?: string;
};

export type Multiply = {
  multiply: number;
};

export type Offset = {
  offsetY: number;
};

export type Children = {
  children: ReactChild | ReactNode | FunctionComponent;
};
export type Function = {};

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string;
}

export type modalPropType = {
  isShown: boolean;
  toggle: () => void;
};

// export interface User {
//   _id: string;
//   phone: string;
// }
