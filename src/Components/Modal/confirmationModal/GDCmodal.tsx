import { FunctionComponent } from 'react';
import { InputEmail, InputPhone } from '../../Input/Input';
import { ListDsc } from './GDCmodal.style';

export const GDCModal: FunctionComponent = (props) => {
  return (
    <ListDsc>
      <p style={{ color: '#333', fontSize: '1.5rem', textAlign: 'center' }}>
        Сайтад бүртгэлтэй эсэхээ шалгах
      </p>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <InputEmail />
        <p style={{ color: '#333', fontSize: '12px', textAlign: 'center' }}>эсвэл</p>
        <InputPhone />
        <button
          style={{ padding: '8px', marginTop: '10px' }}
          onClick={() =>
            alert('Та манай сайтад бүртгэлтэй байна. Өөрийн нууц үгээрээ нэвтэрч орно уу.')
          }
        >
          шалгах
        </button>
      </div>
    </ListDsc>
  );
};
