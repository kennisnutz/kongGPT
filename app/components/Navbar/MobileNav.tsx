'use client';

import { useState, useCallback, useRef } from 'react';
import UserMenuItem from './UserMenuItem';
import Avatar from '../Avatar';
import Link from 'next/link';
import { links } from './links';
import { SafeUser } from '@/app/types';

interface MobileNavProps {
  currentUser?: SafeUser | null;
}

const MobileNav: React.FC<MobileNavProps> = ({ currentUser }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenuOpen = useCallback(() => {
    setIsSubMenuOpen((value) => !value);
  }, []);

  return (
    <div
      className="
    absolute 
    top-16 
    right-0 
    px-2 
    py-4 
    mr-2 
    transform 
    duration-300 
    border-[1px] 
    rounded-xl
    w-max
    "
    >
      <div className="bg-white w-[50vw]">
        <ul className="flex flex-col">
          <li className="flex-row ">
            <div onClick={toggleMenuOpen} className="">
              <div
                className="py-4 px-3 inline-block font-bold  hover:bg-neutral-100 
              hover:text-gray-400 rounded-xl w-full"
              >
                Tools
              </div>
              {isSubMenuOpen && (
                <div className=" ">
                  <ul className="flex flex-col gap-2">
                    {links.map((link) => (
                      <li
                        key={link.title}
                        className="
                        hover:bg-neutral-100 
                        hover:text-gray-400
                        hover:border-white
                        border-[1px]
                        border-gray-300 
                        p-2 rounded-xl"
                      >
                        <Link href={link.link}>{link.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </li>
          <li>
            <Link href={'/about'}>
              <div
                className="py-4 px-3 inline-block font-bold  hover:bg-neutral-100 
              hover:text-gray-400 rounded-xl w-full"
              >
                About
              </div>
            </Link>
          </li>
          <li>
            <Link href={'/docs'}>
              <div
                className="py-4 px-3 inline-block font-bold  hover:bg-neutral-100 
              hover:text-gray-400 rounded-xl w-full"
              >
                Docs
              </div>
            </Link>
          </li>
        </ul>
        <div className="flex flex-row justify-between items-center gap-3 mt-3 ml-2">
          <Avatar src={currentUser?.image || '/assets/images/profile.png'} />
          <UserMenuItem label={'Login'} onClick={() => {}} />/
          <UserMenuItem label={'Sign Up'} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
