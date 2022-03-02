import Modal from '../Modal/Modal';
import { modalPropType } from '../../Types/types';
import { useEffect, useState } from 'react';
import { LoginUl } from './LoginModal.style';
import FocusLock from 'react-focus-lock';
import { Button } from '../Button/Button';
import { InputPassport, InputPhone } from '../Input/Input';

import { datas } from '../../Data/users';
import { PaymentComponent } from '../Payment/PaymentComponent';
import { MySignature } from '../../pages/MySignature/MySignature';
import { loginWeb } from '../../api/auth';

export const LoginModal = (props: modalPropType) => {
  const { isShown, toggle } = props;
  const [currenResult, setCurrentResult] = useState(0);

  const LoginComponent = () => {
    const [phoneInput, setPhoneInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const login = async () => {
      const phone = parseInt(phoneInput);
      const { data } = await loginWeb(phone, passwordInput);

      if (data.success == true) {
        alert('Амжилттай нэвтэрлээ');
        setCurrentResult(1); ///солино
      } else {
        alert('Таны нууц үг эсвэл нэвтрэх нэр буруу байна.');
      }
      // const foundPhone = datas.filter(
      //   (item) => item.phone.toLowerCase() === phoneInput.toLowerCase(),
      // );
      // const foundPassword = datas.filter(
      //   (item) => item.password.toLowerCase() === passwordInput.toLowerCase(),
      // );
      // try {
      //   let found = foundPassword.filter((item) => {
      //     if (item.phone == foundPhone[0].phone) return item;
      //   });
      //   if (foundPhone[0].phone == found[0].phone && foundPhone[0].password == found[0].password) {
      //     // alert('Амжилттай нэвтэрлээ');
      //     if (foundPhone[0].signature) {
      //       alert('та "МИНИЙ ГАРЫН ҮСЭГ" хэсэг рүү өөрийн пин кодоороо нэвтэрч орно уу');
      //       setCurrentResult(2);
      //     } else {
      //       setCurrentResult(1);
      //     }
      //   } else {
      //     alert('Таны нууц үг эсвэл нэвтрэх нэр буруу байна.');
      //   }
      // } catch (e) {
      //   console.log(e);
      //   alert('Таны нууц үг эсвэл нэвтрэх нэр буруу байна.');
      // }
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
  useEffect(() => {
    setCurrentResult(0);
  }, [isShown]);

  return (
    <>
      {
        <Modal
          isShown={isShown}
          hide={toggle}
          headerText=""
          modalContent={
            <>
              {currenResult === 0 && <LoginComponent />}
              {currenResult === 1 && <PaymentComponent />}
            </>
          }
        />
      }
      {currenResult === 2 && <MySignature isShown={isShown} toggle={toggle} />}
    </>
  );
};
