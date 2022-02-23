import React, { FunctionComponent } from 'react';
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
import { ModalProps } from '../../Types/types';

const Modal: FunctionComponent<ModalProps> = ({ isShown, hide, modalContent, headerText }) => {
  const modal = (
    <React.Fragment>
      <Backdrop />
      <FocusLock>
        <Wrapper aria-modal aria-labelledby={headerText} tabIndex={-1} role="dialog">
          <StyledModal onClick={(e) => e.stopPropagation()}>
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
