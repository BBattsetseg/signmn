import { useState } from 'react';

export const useModal = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const toggle = () => {
    setIsShown(!isShown);
    console.log('toggle duudagdlaa');
  };
  return {
    isShown,
    toggle,
  };
};
