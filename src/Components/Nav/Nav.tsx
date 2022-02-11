import { useEffect, useState, useRef } from 'react';

import { data } from '../../Data/nav';
import { AnchorArray, Offset } from '../../Types/types';
import { ConfirmationModal } from '../Modal/confirmationModal/Confirmation-modal';
import Modal from '../Modal/Modal';
import { useModal } from '../Modal/useModal';
import { NavContainer, List } from './Nav.styles';
import { NavLink } from './NavLink/NavLink';

type NavTypes = AnchorArray & Offset;

const Nav = ({ ids, offsetY }: NavTypes) => {
  const [isSticked, setIsSticked] = useState(false);
  const [navPosition, setNavPosition] = useState(0);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const setDefaultPos = () => {
      if (navRef.current) {
        setNavPosition(window.innerHeight - navRef.current.offsetHeight);
      }
    };
    setDefaultPos();
    window.addEventListener('resize', setDefaultPos);
    return () => window.removeEventListener('resize', setDefaultPos);
  }, [navPosition]);

  useEffect(() => {
    offsetY >= navPosition ? setIsSticked(true) : setIsSticked(false);
  }, [navPosition, offsetY]);

  const { isShown, toggle } = useModal();

  return (
    <NavContainer ref={navRef} className={isSticked ? 'sticked' : 'static'}>
      <List>
        {data.map(({ title, Icon }, i) => {
          return (
            <NavLink key={title} href={`#${ids[i]}`} title={title} onClick={toggle}>
              {/* <Icon /> */}
              <p>{title}</p>
              <Modal
                isShown={isShown}
                hide={toggle}
                headerText="Та имэйл эсвэл утасны дугаараа оруулна уу."
                modalContent={<ConfirmationModal />}
              />
            </NavLink>
          );
        })}
      </List>
    </NavContainer>
  );
};

export { Nav };
