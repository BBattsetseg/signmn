import { ChangeEvent, useState } from 'react';
import { Input } from '../../Components/Input/Input';
import Modal, { modalPropType } from '../../Components/Modal/Modal';
import { ListDsc } from './GDCmodal.style';
import FocusLock from 'react-focus-lock';
import { Button } from '../../Components/Button/Button';
import { datas } from '../../Data/users';
import { useEffect } from 'react';

export const GDCModal = (props: modalPropType) => {
  const { isShown, toggle } = props;
  const Modalds = () => {
    const [result, setResult] = useState('');
    const [query, setQuery] = useState('');
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const enterName = e.target.value;
      setQuery(enterName);
    };

    const search = () => {
      const foundItems = datas.filter((item) =>
        item.email.toLowerCase().includes(query.toLowerCase()),
      );

      if (foundItems.length == 0) {
        console.log('бүртгэлд байхгүй');
        setResult(' ');
      } else {
        setResult((prevState) => (prevState = foundItems[0].email));
      }

      console.log(foundItems);
      console.log(result);
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
                if (result == ' ' || result.length == 0) {
                  alert('Шинээр бүртэл үүсгэх хэсэг рүү');
                } else {
                  alert('Та манай системд бүртгэлтэй байна. Нэвтрэх хэсгээр орно уу');
                }
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
