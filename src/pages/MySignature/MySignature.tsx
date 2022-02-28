import { modalPropType } from '../../Types/types';
import { MySignatureModal } from './MySignatureModal';

export const MySignature = (props: modalPropType) => {
  const { isShown, toggle } = props;
  return <MySignatureModal isShown={isShown} toggle={toggle} />;
};
