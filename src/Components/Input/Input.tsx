import { InputSyle } from './Input.styles';

const InputEmail = () => {
  return <InputSyle type="email" placeholder="Имэйл хаягаа оруулна уу." />;
};
const Input = () => {
  return <InputSyle type="text" placeholder="Имэйл эсвэл утасны дугаар оруулна уу." />;
};

const InputPhone = () => {
  return <InputSyle type="phoneNumber" placeholder="Утасны дугаараа оруулна уу." />;
};
const InputPassport = () => {
  return <InputSyle type="passport" placeholder="Нууц үгээ оруулна уу" />;
};

export { InputEmail, InputPhone, InputPassport, Input };
