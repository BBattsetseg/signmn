import FocusLock from 'react-focus-lock';
import { Button } from '../../Components/Button/Button';
import { LoginUl } from '../../Components/Login/LoginModal.style';
import Modal, { modalPropType } from '../../Components/Modal/Modal';

export const GSButtonsModal = (props: modalPropType) => {
  const { isShown, toggle } = props;
  const GSButtons = () => {
    return (
      <LoginUl>
        <FocusLock>
          <Button onClick={() => alert(' Хувь хүнийн гарын үсэг захиалах')}>
            Хувь хүний гарын үсэг захиалах
          </Button>
          <Button onClick={() => alert(' Байгууллагын гарын үсэг захиалах')}>
            Байгууллагын гарын үсэг захиалах
          </Button>
        </FocusLock>
      </LoginUl>
    );
  };

  return <Modal isShown={isShown} hide={toggle} modalContent={<GSButtons />} headerText={''} />;
};
