'use client';

import { SafeUser } from '@/app/types';
import Container from '../Container';
import Logo from './Logo';
import NavMenu from './NavMenu';
import UserMenu from './UserMenu';

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full bg-gray-200 z-10 shadow-sm">
      <div className=" border-b-[1px] ">
        <Container>
          <div
            className="
            flex flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
          >
            <Logo />
            <NavMenu currentUser={currentUser} />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
