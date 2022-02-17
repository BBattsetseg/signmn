import { Input } from '../../Components/Input/Input';
import Modal, { modalPropType } from '../../Components/Modal/Modal';
import { ListDsc } from './GDCmodal.style';
import FocusLock from 'react-focus-lock';
import { Button } from '../../Components/Button/Button';
export const GDCModal = (props: modalPropType) => {
  const { isShown, toggle } = props;
  const Modalds = () => {
    return (
      <ListDsc>
        <FocusLock>
          <p style={{ color: '#333', fontSize: '1.5rem', textAlign: 'center' }}>
            Системд бүртгэгдсэн эсэхээ шалгах
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Input />
            <Button
              onClick={() =>
                alert('Та манай системд бүртгэлтэй байна. Өөрийн нууц үгээрээ нэвтэрч орно уу.')
              }
            >
              Илгээх
            </Button>
          </div>
        </FocusLock>
      </ListDsc>
    );
  };
  return <Modal isShown={isShown} hide={toggle} headerText="" modalContent={<Modalds />} />;
};
