import React, { FunctionComponent, useEffect } from 'react';
import FocusLock from 'react-focus-lock';
import ReactDOM from 'react-dom';

import {
  Wrapper,
  Header,
  StyledModal,
  HeaderText,
  CloseButton,
  Content,
  Backdrop,
} from './Modal.style';

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
const Modal: FunctionComponent<ModalProps> = ({ isShown, hide, modalContent, headerText }) => {
  const onKeyDown = (KeyboardEvent: { keyCode: number }) => {
    if (KeyboardEvent.keyCode === 27 && isShown) {
      hide();
    }
  };

  useEffect(() => {
    isShown ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset');
    document.addEventListener('keydown', onKeyDown, false);
    return () => {
      document.removeEventListener('keydown', onKeyDown, false);
    };
  }, [isShown]);

  const modal = (
    <React.Fragment>
      <Backdrop />
      <FocusLock>
        <Wrapper aria-modal aria-labelledby={headerText} tabIndex={-1} role="dialog">
          <StyledModal>
            <Header>
              <HeaderText>{headerText}</HeaderText>
              <CloseButton onClick={hide}>X</CloseButton>
            </Header>
            <Content>{modalContent}</Content>
          </StyledModal>
        </Wrapper>
      </FocusLock>
    </React.Fragment>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;
