import React, { FunctionComponent } from 'react';
import { InputEmail, InputPhone } from '../../Input/Input';
import { List } from '../../Nav/Nav.styles';

// interface ConfirmationModalProps {
//   onConfirm: () => void;
//   onCancel: () => void;
//   message: string;
// }

export const ConfirmationModal: FunctionComponent = (props) => {
  return (
    <List>
      <InputEmail />
      <p style={{ color: '#333', fontSize: '12px' }}>эсвэл</p>
      <InputPhone />
      <button
        style={{ padding: '8px' }}
        onClick={() =>
          alert('Та манай сайтад бүртгэлтэй байна. Өөрийн нууц үгээрээ нэвтэрч орно уу.')
        }
      >
        шалгах
      </button>
    </List>
  );
};
