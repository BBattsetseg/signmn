import { modalPropType } from '../../Types/types';
import { useEffect, useState } from 'react';
import FocusLock from 'react-focus-lock';
import { datas } from '../../Data/users';
import { LoginUl } from '../../Components/Login/LoginModal.style';
import { InputPassport, InputPhone } from '../../Components/Input/Input';
import { Button } from '../../Components/Button/Button';
import Modal from '../../Components/Modal/Modal';

export const MySignatureModal = (props: modalPropType) => {
  const { isShown, toggle } = props;
  const [currenResult, setCurrentResult] = useState(0);

  const LoginSComponent = () => {
    const [phoneInput, setPhoneInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

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
          // alert('Амжилттай нэвтэрлээ');
          if (foundPhone[0].signature) {
            alert('та "МИНИЙ ГАРЫН ҮСЭГ" хэсэг рүү өөрийн пин кодоороо нэвтэрч орно уу');
            setCurrentResult(2);
          } else {
            setCurrentResult(1);
          }
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
          <p style={{ color: '#333', fontSize: '34px', textAlign: 'center' }}>
            Миний гарын үсэг-рүү нэвтрэх
          </p>
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

  return <Modal isShown={isShown} hide={toggle} headerText="" modalContent={<LoginSComponent />} />;
};
