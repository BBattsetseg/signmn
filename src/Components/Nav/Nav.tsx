import { useEffect, useState, useRef } from 'react';

import { data } from '../../Data/nav';
import { AnchorArray, Offset } from '../../Types/types';
import { LoginModal } from '../Login/Login';
import { GDCModal } from '../../pages/GetDSC/GDCmodal';
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

  return (
    <NavContainer ref={navRef} className={isSticked ? 'sticked' : 'static'}>
      <List>
        {data.map(({ title }, i) => {
          const { isShown, toggle } = useModal();
          return (
            <NavLink href={`#${ids[i]}`} title={title} onClick={toggle} key={i}>
              <p>{title}</p>
              {ids[i] == 'getsignature' ? (
                <GDCModal isShown={isShown} toggle={toggle} />
              ) : (
                ids[i] == 'login' && <LoginModal isShown={isShown} toggle={toggle} />
              )}
            </NavLink>
          );
        })}
      </List>
    </NavContainer>
  );
};

export { Nav };
