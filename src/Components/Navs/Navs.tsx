import { useEffect, useState, useRef } from 'react';
import { AnchorArray, Offset } from '../../Types/types';
import { LoginModal } from '../Login/LoginModal';
import { GDCModal } from '../../pages/GetSignature/GDSmodal';
import { useModal } from '../Modal/useModal';
import { NavContainer, List, NavsContainer, ListS } from './Navs.styles';
import { NavsLink } from './NavsLink/NavsLink';
import { MySignatureModal } from '../../pages/MySignature/MySignatureModal';
import { data } from '../../myDATA/nav';

type NavTypes = AnchorArray & Offset;

const Navs = ({ ids, offsetY }: NavTypes) => {
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
    <NavsContainer ref={navRef} className={isSticked ? 'sticked' : 'static'}>
      <ListS>
        {data.map(({ title }, i) => {
          const { isShown, toggle } = useModal();
          return (
            <NavsLink href={`#${ids[i]}`} title={title} onClick={toggle} key={i}>
              <p>{title}</p>
              {ids[i] == 'getsignature' && <GDCModal isShown={isShown} toggle={toggle} />}
              {ids[i] == 'login' && <LoginModal isShown={isShown} toggle={toggle} />}
            </NavsLink>
          );
        })}
      </ListS>
    </NavsContainer>
  );
};

export { Navs };
