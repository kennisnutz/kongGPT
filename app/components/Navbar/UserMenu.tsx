'use client';
import { useCallback, useState, useRef, useEffect } from 'react';

import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';
import Avatar from '../Avatar';
import UserMenuItem from './UserMenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const userMenu = useRef<HTMLDivElement>(null);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenu.current &&
        !userMenu.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative hidden 
    md:block "
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="        
        text-sm 
        font-semibold 
        py-3 px-4 
        rounded-full 
        hover:bg-neutral-100 
        transition 
        cursor-poiter
        
        "
          onClick={toggleOpen}
          ref={userMenu}
        >
          <Avatar src={currentUser?.image || '/assets/images/profile.png'} />

          {isOpen && (
            <>
              <div
                className="
              absolute 
              rounded-xl 
              shadow-md 
              w-[40vw]
              md:w-max
              bg-white                           
              right-0
              top-16
              text-sm "
              >
                {currentUser ? (
                  <>
                    <div className="flex flex-col cursor-pointer ">
                      <>
                        <UserMenuItem label={'My Profile'} onClick={() => {}} />
                        <hr />
                        <UserMenuItem
                          label={'Sign Out'}
                          onClick={() => {
                            signOut();
                          }}
                        />
                      </>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col cursor-pointer">
                      <>
                        <UserMenuItem
                          label={'Login'}
                          onClick={loginModal.onOpen}
                        />
                        <UserMenuItem
                          label={'Sign Up'}
                          onClick={registerModal.onOpen}
                        />
                      </>
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
