import { ChangeEvent, useEffect, useState } from 'react';
import { InputPhone } from '../../Components/Input/Input';
import Modal from '../../Components/Modal/Modal';
import { ListDsc } from './GDSmodal.style';
import FocusLock from 'react-focus-lock';
import { Button } from '../../Components/Button/Button';
import { datas } from '../../Data/users';
import { modalPropType } from '../../Types/types';
import { GSButtons } from './GSButtons';
import { LoginComponent } from '../../Components/Login/LoginComponent';

export const GDCModal = (props: modalPropType) => {
  const { isShown, toggle } = props;
  const [currentComponent, setCurrentComponent] = useState(0);

  const Modalds = () => {
    const [query, setQuery] = useState('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const enterName = e.target.value;
      setQuery(enterName);
    };

    const search = () => {
      let result = '';
      const foundItems = datas.filter((item) => item.phone.toLowerCase() === query.toLowerCase());

      if (foundItems.length > 0) {
        result = foundItems[0].phone;
      } else {
        console.log('бүртгэлд байхгүй');
        result = ' ';
      }

      if (result == ' ' || result.length == 0) {
        setCurrentComponent(1);
        return;
      } else {
        alert('Та манай системд бүртгэлтэй байна. Нэвтрэх хэсгээр орно уу');
        setCurrentComponent(2);
      }
    };

    return (
      <ListDsc>
        <FocusLock>
          <p style={{ color: '#333', fontSize: '1.5rem', textAlign: 'center' }}>
            Гарын үсэг захиалах
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <InputPhone onChange={inputHandler} value={query} name={'test'} label={'test'} />
            <Button onClick={search}>Илгээх</Button>
          </div>
        </FocusLock>
      </ListDsc>
    );
  };

  useEffect(() => {
    setCurrentComponent(0);
  }, [isShown]);
  return (
    <Modal
      isShown={isShown}
      hide={toggle}
      headerText=""
      modalContent={
        <>
          {currentComponent === 0 && <Modalds />}
          {currentComponent === 1 && <GSButtons />}
          {currentComponent === 2 && <LoginComponent />}
        </>
      }
    />
  );
};
