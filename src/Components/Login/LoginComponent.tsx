import { LoginUl } from './LoginModal.style';
import FocusLock from 'react-focus-lock';
import { Button } from '../Button/Button';
import { InputPassport, InputPhone } from '../Input/Input';
import { useState } from 'react';
import { datas } from '../../Data/users';

export const LoginComponent = () => {
  const [phoneInput, setPhoneInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  console.log(passwordInput);
  const login = () => {
    console.log('login function duudagdlaa');

    const foundPhone = datas.filter(
      (item) => item.phone.toLowerCase() === phoneInput.toLowerCase(),
    );
    const foundPassword = datas.filter(
      (item) => item.password.toLowerCase() === passwordInput.toLowerCase(),
    );
    try {
      let found = foundPassword.filter((item) => {
        if (item.phone == foundPhone[0].phone) return item;
      });
      if (foundPhone[0].phone == found[0].phone && foundPhone[0].password == found[0].password) {
        return alert('Амжилттай нэвтэрлээ');
      } else {
        alert('Таны нууц үг эсвэл нэвтрэх нэр буруу байна.');
      }
    } catch (e) {
      console.log(e);
      alert('Таны нууц үг эсвэл нэвтрэх нэр буруу байна.');
    }
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
          name={'text'}
          label={'text'}
          value={passwordInput}
          onChange={(e) => {
            setPasswordInput(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            login();
          }}
        >
          Нэвтрэх
        </Button>
      </FocusLock>
    </LoginUl>
  );
};
