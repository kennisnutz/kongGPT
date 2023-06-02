'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  return (
    <Image
      alt="logo"
      className="     
      md:block
      cursor-pointer
      rounded-full
   "
      height={40}
      width={40}
      src={'/assets/images/logo.svg'}
    />
  );
};

export default Logo;
