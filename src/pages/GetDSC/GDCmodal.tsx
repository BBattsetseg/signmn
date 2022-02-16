import { Input } from '../../Components/Input/Input';
import Modal, { modalPropType } from '../../Components/Modal/Modal';
import { ListDsc } from './GDCmodal.style';
import FocusLock from 'react-focus-lock';
export const GDCModal = (props: modalPropType) => {
  const { isShown, toggle } = props;
  const Modalds = () => {
    return (
      <ListDsc>
        <FocusLock>
          <p style={{ color: '#333', fontSize: '1.5rem', textAlign: 'center' }}>
            Сайтад бүртгэлтэй эсэхээ шалгах
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Input />
            <button
              style={{ padding: '8px', marginTop: '10px' }}
              onClick={() =>
                alert('Та манай системд бүртгэлтэй байна. Өөрийн нууц үгээрээ нэвтэрч орно уу.')
              }
            >
              Илгээх
            </button>
          </div>
        </FocusLock>
      </ListDsc>
    );
  };
  return <Modal isShown={isShown} hide={toggle} headerText="" modalContent={<Modalds />} />;
};
