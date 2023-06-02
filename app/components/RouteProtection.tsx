// 'use client';
// import { useState, useEffect } from 'react';
// import useLoginModal from '../hooks/useLoginModal';
// import getCurrentUser from '../actions/getCurrentUser';

// interface RouteProtectionProps {
//   children: React.ReactNode;
// }

// const RouteProtection: React.FC<RouteProtectionProps> = ({ children }) => {
//   const loginModal = useLoginModal();
//   const currentUser = getCurrentUser();

//   useEffect(() => {
//     if (!currentUser) {
//       loginModal.onOpen();
//     }
//   }, [currentUser, loginModal]);

//   i;
//   return <div>{children}</div>;
// };

// export default RouteProtection;
