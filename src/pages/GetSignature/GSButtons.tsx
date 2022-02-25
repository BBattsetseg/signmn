import { useState } from 'react';
import FocusLock from 'react-focus-lock';
import { Button } from '../../Components/Button/Button';
import { RegisterModal } from '../../Components/Forms/RegisterModal';
import { LoginUl } from '../../Components/Login/LoginModal.style';
import { modalPropType } from '../../Types/types';
import { P } from './GSButtons.style';

export const GSButtons = (props: modalPropType) => {
  const { isShown, toggle } = props;
  const [currenResult, setCurrentResult] = useState(0);

  const registeredIndividual = () => {
    alert(' Хувь хүнийн гарын үсэг захиалах');
    setCurrentResult(1);
  };

  const registeredOrganization = () => {
    alert(' Байгууллагын гарын үсэг захиалах');
    setCurrentResult(1);
  };

  return (
    <>
      {currenResult == 1 && <RegisterModal isShown={!isShown} toggle={toggle} />}
      {currenResult == 0 && (
        <LoginUl>
          <FocusLock>
            <P>Захиалга хийх</P>
            <Button onClick={registeredIndividual}>Хувь хүний гарын үсэг /5000 төг/</Button>
            <Button onClick={registeredOrganization}>Байгууллагын гарын үсэг /20000 төг/</Button>
          </FocusLock>
        </LoginUl>
      )}
    </>
  );
};
