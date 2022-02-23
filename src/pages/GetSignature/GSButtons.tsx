import FocusLock from 'react-focus-lock';
import { Button } from '../../Components/Button/Button';
import { LoginUl } from '../../Components/Login/LoginModal.style';
import { P } from './GSButtons.style';

export const GSButtons = () => {
  return (
    <LoginUl>
      <FocusLock>
        <P>Захиалга хийх</P>
        <Button onClick={() => alert(' Хувь хүнийн гарын үсэг захиалах')}>
          Хувь хүний гарын үсэг /5000 төг/
        </Button>
        <Button onClick={() => alert(' Байгууллагын гарын үсэг захиалах')}>
          Байгууллагын гарын үсэг /20000 төг/
        </Button>
      </FocusLock>
    </LoginUl>
  );
};
