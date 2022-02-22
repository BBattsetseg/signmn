import { ChangeEvent, useState } from 'react';
import { Input } from '../../Components/Input/Input';
import Modal, { modalPropType } from '../../Components/Modal/Modal';
import { ListDsc } from './GDSmodal.style';
import FocusLock from 'react-focus-lock';
import { Button } from '../../Components/Button/Button';
import { datas } from '../../Data/users';
import { GSButtonsModal } from '../GetSignature/GSButtonsModal';
import ReactDOM from 'react-dom';
import { LoginModal } from '../../Components/Login/LoginModal';

export const GDCModal = (props: modalPropType) => {
  const { isShown, toggle } = props;

  const Modalds = () => {
    const [query, setQuery] = useState('');
    const [isBtns, setIsBtns] = useState<boolean>(false);

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const enterName = e.target.value;
      setQuery(enterName);
    };

    const search = () => {
      let result = '';
      const foundItems = datas.filter((item) =>
        item.email.toLowerCase().includes(query.toLowerCase()),
      );

      if (foundItems.length > 0) {
        result = foundItems[0].email;
      } else {
        console.log('бүртгэлд байхгүй');
        result = ' ';
      }

      if (result == ' ' || result.length == 0) {
        alert('Шинээр тоон гарын үсэг захиалах');
        return <GSButtonsModal isShown={isBtns} toggle={() => setIsBtns(!isBtns)} />;
      } else {
        alert('Та манай системд бүртгэлтэй байна. Нэвтрэх хэсгээр орно уу');
      }
    };

    return (
      <ListDsc>
        <FocusLock>
          <p style={{ color: '#333', fontSize: '1.5rem', textAlign: 'center' }}>
            Системд бүртгэгдсэн эсэхээ шалгах
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Input name={'name'} label={'name'} onChange={inputHandler} value={query} />
            <Button
              onClick={() => {
                search();
                toggle();
              }}
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
