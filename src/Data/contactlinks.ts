import { AiOutlinePhone, AiOutlineMail, AiOutlineClockCircle } from 'react-icons/ai';

const data = [
  {
    href: 'tel:+48000000000',
    title: 'Утасны дугаар',
    label: '+976 77887788',
    Icon: AiOutlinePhone,
    isLink: true,
  },
  {
    href: 'mailto:support@metaverse_signature.com',
    title: 'Имэйл хаяг',
    label: 'support@metaverse_signature.com',
    Icon: AiOutlineMail,
    isLink: true,
  },
  {
    href: '#contact',
    title: 'Цагийн хуваарь',
    label: 'Даваа - Баасан:  8:00am-16:00pm',
    Icon: AiOutlineClockCircle,
    isLink: false,
  },
];

export { data };
