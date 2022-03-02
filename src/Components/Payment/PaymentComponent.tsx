import { ListDsc } from '../../pages/GetSignature/GDSmodal.style';
import { Button } from '../Button/Button';
import { InputEmail, InputPhone } from '../Input/Input';
import { useState } from 'react';
import { Alink, H3, P, PContainer, SpaceBetween } from './Payment.style';

export const PaymentComponent = () => {
  let phone = 97680046004;
  let email = 'roriau@gmail.com';
  const [currentState, setCurrenState] = useState(0);
  const transfer = () => {
    setCurrenState(3);
  };
  return (
    <ListDsc>
      {currentState == 0 && (
        <>
          <PContainer style={{ width: '200px' }}>
            <P style={{ color: 'red' }}>Төлбөрийн нэхэмжлэх очих тул мэдээллээ шалгана уу</P>
            <InputEmail name={'email'} label={'email'} value={email} />
            <InputPhone name={'phone'} label={'email'} value={phone} />
            <Button onClick={() => setCurrenState(1)}>Үргэлжлүүлэх</Button>
          </PContainer>
        </>
      )}
      {currentState == 1 && (
        <PContainer style={{ width: '400px' }}>
          <H3>Нэхэмжлэх</H3>
          <SpaceBetween>
            <P>Гэрчилгээний хугацаа /1 жил/</P>
            <P>5000 төг</P>
          </SpaceBetween>
          <hr />
          <SpaceBetween>
            <P>Нийт төлөх</P>
            <P>5000 төг</P>
          </SpaceBetween>

          <Button
            onClick={() => {
              alert(`Таны ${email} рүү илгээв.`), setCurrenState(2);
            }}
          >
            Үргэлжлүүлэх
          </Button>
        </PContainer>
      )}
      {currentState == 2 && (
        <PContainer style={{ width: '400px' }}>
          <H3>Төлбөрийн төрөлөө сонгоно уу.</H3>
          <SpaceBetween>
            <Alink onClick={() => transfer()}>Банкаар</Alink>
            <Alink onClick={() => transfer()}>Картаар</Alink>
            <Alink onClick={() => transfer()}>QPay-ээр</Alink>
          </SpaceBetween>

          <Button
            onClick={() => {
              alert(`Таны ${email} рүү илгээв.`), setCurrenState(2);
            }}
          >
            Үргэлжлүүлэх
          </Button>
        </PContainer>
      )}
      {currentState == 3 && (
        <PContainer style={{ width: '500px' }}>
          <H3>Захиалга өгсөн танд баярлалаа.</H3>{' '}
          <p>Таны бүртгүүлсэн эмэйл хаягаар баталгаажуулах линк илгээгдлээ.</p>
        </PContainer>
      )}
    </ListDsc>
  );
};
