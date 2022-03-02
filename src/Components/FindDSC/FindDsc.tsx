import { Theme } from '../../StyledComponents/Theme';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { ContainerFind } from './FindDsc.styled';

export const FindDsc = () => {
  return (
    <ContainerFind>
      <Input
        style={{ background: ` ${Theme.darkYellow}`, borderRadius: 0 }}
        name={'find2'}
        label={'find2'}
        placeholder={'Овог, нэр'}
      />
      <Input
        style={{ background: ` ${Theme.darkYellow}`, borderRadius: 0 }}
        name={'find1'}
        label={'find1'}
        placeholder={'Утасны дугаар'}
      />
      <Button style={{ borderRadius: 0 }} onClick={() => console.log('хайж байна')}>
        Хайх
      </Button>
    </ContainerFind>
  );
};
