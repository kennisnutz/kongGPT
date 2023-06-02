'use client';

import { useEffect } from 'react';
import useLoginModal from '../hooks/useLoginModal';

const Redirect = () => {
  const loginModal = useLoginModal();

  useEffect(() => {
    const openLogin = () => loginModal.onOpen();
    openLogin();
    return;
  }, []);

  return <div></div>;
};

export default Redirect;
