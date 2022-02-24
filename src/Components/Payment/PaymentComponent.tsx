import { ListDsc } from '../../pages/GetSignature/GDSmodal.style';
import { H1 } from '../Header/Header.styles';
import { Button } from '../Button/Button';

export const PaymentComponent = () => {
  return (
    <ListDsc>
      <H1 style={{ color: '#333', fontSize: '1.5rem', textAlign: 'center' }}>Төлбөрийн хэсэг</H1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Button onClick={() => alert('үргэлжлүүлэх')}>Төлөх</Button>
      </div>
    </ListDsc>
  );
};
