import Modal from '../Modal/Modal';
import { modalPropType } from '../../Types/types';
import { LoginComponent } from './LoginComponent';

export const LoginModal = (props: modalPropType) => {
  const { isShown, toggle } = props;

  return <Modal isShown={isShown} hide={toggle} headerText="" modalContent={<LoginComponent />} />;
};
