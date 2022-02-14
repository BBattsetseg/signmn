import { Input } from './Input.styles';

const InputEmail = () => {
  return <Input type="email" placeholder="Имэйл хаягаа оруулна уу." />;
};

const InputPhone = () => {
  return <Input type="phoneNumber" placeholder="Утасны дугаараа оруулна уу." />;
};
const InputPassport = () => {
  return <Input type="passport" placeholder="Нууц үгээ оруулна уу" />;
};

export { InputEmail, InputPhone, InputPassport };
