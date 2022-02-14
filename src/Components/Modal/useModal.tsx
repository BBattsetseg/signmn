import { useState } from 'react';

export const useModal = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const toggle = () => {
    console.log('toggle function duudagdlaa');
    setIsShown(!isShown);
  };
  return {
    isShown,
    toggle,
  };
};
