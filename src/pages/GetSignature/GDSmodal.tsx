import { ChangeEvent, useEffect, useState } from 'react';
import { InputPhone } from '../../Components/Input/Input';
import Modal from '../../Components/Modal/Modal';
import { ListDsc } from './GDSmodal.style';
import FocusLock from 'react-focus-lock';
import { Button } from '../../Components/Button/Button';

import { modalPropType } from '../../Types/types';
import { GSButtons } from './GSButtons';

import { LoginModal } from '../../Components/Login/LoginModal';
import { checkuser } from '../../api/auth';

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

    const search = async () => {
      const phone = parseInt(query);
      const { data } = await checkuser(phone);

      if (data.phone_number !== null) {
        alert('Та манай системд бүртгэлтэй байна. Нэвтрэх хэсгээр орно уу');
        setCurrentComponent(2);
      } else {
        setCurrentComponent(1);
        console.log('бүртгэлд байхгүй');
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
    <>
      {currentComponent === 2 && <LoginModal isShown={isShown} toggle={toggle} />}
      <Modal
        isShown={isShown}
        hide={toggle}
        headerText=""
        modalContent={
          <>
            {currentComponent === 0 && <Modalds />}
            {currentComponent === 1 && <GSButtons isShown={false} toggle={toggle} />}
          </>
        }
      />
    </>
  );
};
