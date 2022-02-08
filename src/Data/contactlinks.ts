import { AiOutlinePhone, AiOutlineMail, AiOutlineClockCircle } from 'react-icons/ai';

const data = [
  {
    href: 'tel:+48000000000',
    title: 'Утасны дугаар',
    label: '+7777 7777',
    Icon: AiOutlinePhone,
    isLink: true,
  },
  {
    href: 'mailto:contactemail@email.com',
    title: 'Имэйл хаяг',
    label: 'contact_metatrade@email.com',
    Icon: AiOutlineMail,
    isLink: true,
  },
  {
    href: '#contact',
    title: 'Цагийн хуваарь',
    label: 'Даваа - Баасан : 8:00-16:00',
    Icon: AiOutlineClockCircle,
    isLink: false,
  },
];

export { data };
