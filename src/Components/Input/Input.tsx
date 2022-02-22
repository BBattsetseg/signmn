import { FC, InputHTMLAttributes } from 'react';
import { InputSyle } from './Input.styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <InputSyle
      type="text"
      placeholder="Имэйл эсвэл утасны дугаар оруулна уу."
      id={name}
      {...rest}
    />
  );
};
const InputEmail: FC<InputProps> = ({ name, label, ...rest }) => {
  return <InputSyle type="email" placeholder="Имэйл хаягаа оруулна уу." id={name} {...rest} />;
};

const InputPhone: FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <InputSyle type="phoneNumber" placeholder="Утасны дугаараа оруулна уу." id={name} {...rest} />
  );
};

const InputPassport: FC<InputProps> = ({ name, label, ...rest }) => {
  return <InputSyle type="passport" placeholder="Нууц үгээ оруулна уу" id={name} {...rest} />;
};

export { InputEmail, InputPhone, InputPassport, Input };
