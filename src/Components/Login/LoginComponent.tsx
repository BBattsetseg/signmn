import { LoginUl } from './LoginModal.style';
import FocusLock from 'react-focus-lock';
import { Button } from '../Button/Button';
import { InputPassport, InputPhone } from '../Input/Input';
import { useState } from 'react';
import { datas } from '../../Data/users';

export const LoginComponent = () => {
  const [phoneInput, setPhoneInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const login = () => {
    console.log('login function duudagdlaa');
    let result = [];
    const foundPhone = datas.filter((item) => item.phone.toLowerCase() === phoneInput);
    const foundPassword = datas.filter((item) => item.password.toLowerCase() === passwordInput);
    result = foundPhone && foundPassword;
    console.log(result);
  };

  return (
    <LoginUl onClick={() => console.log('inside daragdlaa')}>
      <FocusLock>
        <p style={{ color: '#333', fontSize: '34px', textAlign: 'center' }}>Нэвтрэх</p>
        <InputPhone
          name={''}
          label={''}
          value={phoneInput}
          onChange={(e) => {
            setPhoneInput(e.target.value);
          }}
        />
        <InputPassport
          name={''}
          label={''}
          value={passwordInput}
          onChange={(e) => {
            setPasswordInput(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            login();
            alert('Нууц үг эсвэл утасны дугаар буруу байна.');
          }}
        >
          Нэвтрэх
        </Button>
      </FocusLock>
    </LoginUl>
  );
};
