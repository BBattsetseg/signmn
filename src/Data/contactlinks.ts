import { AiOutlinePhone, AiOutlineMail, AiOutlineClockCircle } from 'react-icons/ai';

const data = [
  {
    href: 'tel:+48000000000',
    title: 'Утасны дугаар',
    label: '+976 9999 9999',
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
    label: 'Даваа - Баасан   /9am - 18pm/',
    Icon: AiOutlineClockCircle,
    isLink: false,
  },
];

export { data };
