import Modal from '../Modal/Modal';
import { modalPropType } from '../../Types/types';
import { useState } from 'react';
import FocusLock from 'react-focus-lock';
import { Button } from '../Button/Button';
import { Input, InputEmail, InputPassport, InputPhone } from '../Input/Input';
import { LoginUl } from '../Login/LoginModal.style';

export const RegisterModal = (props: modalPropType) => {
  const { isShown, toggle } = props;

  const RegisterForm = () => {
    const [phoneInput, setPhoneInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [rePasswordInput, setRePasswordInput] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [registerId, setRegisterId] = useState('');

    // console.log(passwordInput);  // Lodash ashiglana
    const register = () => {
      try {
        alert('Амжилттай бүртгүүллээ');
      } catch (e) {
        alert('Та мэдээллээ бүрэн бөглөнө үү!');
        console.log(e);
      }
    };

    return (
      <LoginUl>
        <FocusLock>
          <p style={{ color: '#333', fontSize: '34px', textAlign: 'center' }}>Бүртгүүлэх</p>
          <Input
            name={'lastname'}
            label={'lastname'}
            placeholder={'Овог'}
            value={lastname}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <Input
            name={'firstname'}
            label={'firstname'}
            placeholder={'Нэр'}
            value={firstname}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <Input
            name={'registerId'}
            label={'registerId'}
            placeholder={'Регистер'}
            value={registerId}
            onChange={(e) => {
              setRegisterId(e.target.value);
            }}
          />
          <InputEmail
            name={'email'}
            label={'email'}
            placeholder={'Имэйл'}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <InputPhone
            name={'phone'}
            label={'phone'}
            value={phoneInput}
            required
            onChange={(e) => {
              setPhoneInput(e.target.value);
            }}
          />
          <InputPassport
            name={'password'}
            label={'password'}
            value={passwordInput}
            onChange={(e) => {
              setPasswordInput(e.target.value);
            }}
          />
          <InputPassport
            name={'rePassword'}
            label={'rePassword'}
            value={rePasswordInput}
            onChange={(e) => {
              setRePasswordInput(e.target.value);
            }}
          />
          <Button
            onClick={() => {
              register();
            }}
          >
            Бүртгүүлэх
          </Button>
        </FocusLock>
      </LoginUl>
    );
  };

  return <Modal isShown={isShown} hide={toggle} headerText="" modalContent={<RegisterForm />} />;
};
