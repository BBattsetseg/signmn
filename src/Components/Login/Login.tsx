import { FunctionComponent } from 'react';
import { InputEmail, InputPassport } from '../Input/Input';

import { LoginUl } from './Login.style';

export const LoginModal: FunctionComponent = (props) => {
  return (
    <LoginUl>
      <p style={{ color: '#333', fontSize: '34px', textAlign: 'center' }}>Нэвтрэх</p>
      <InputEmail />

      <InputPassport />
      <button
        style={{ padding: '8px', marginTop: '5px' }}
        onClick={() => alert('Өөрийн нууц үгээрээ нэвтэрч орно уу.')}
      >
        Нэвтрэх
      </button>
    </LoginUl>
  );
};
