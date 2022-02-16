import { InputEmail, InputPassport } from '../Input/Input';
import Modal, { modalPropType } from '../Modal/Modal';
import FocusLock from 'react-focus-lock';
import { LoginUl } from './Login.style';

export const LoginModal = (props: modalPropType) => {
  const { isShown, toggle } = props;
  const LoginM = () => {
    return (
      <LoginUl>
        <FocusLock>
          <p style={{ color: '#333', fontSize: '34px', textAlign: 'center' }}>Нэвтрэх</p>
          <InputEmail />

          <InputPassport />
          <button
            style={{ padding: '8px', marginTop: '5px' }}
            onClick={() => alert('Өөрийн нууц үгээрээ нэвтэрч орно уу.')}
          >
            Нэвтрэх
          </button>
        </FocusLock>
      </LoginUl>
    );
  };

  return <Modal isShown={isShown} hide={toggle} headerText="" modalContent={<LoginM />} />;
};
