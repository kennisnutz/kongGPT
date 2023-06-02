'use client';

import Link from 'next/link';

import { GiHamburgerMenu } from 'react-icons/gi';
import { FaRegWindowClose } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import { links } from './links';
import { SafeUser } from '@/app/types';

import MobileNav from './MobileNav';

interface NavMenuProps {
  currentUser?: SafeUser | null;
}

const NavMenu: React.FC<NavMenuProps> = ({ currentUser }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const subMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        subMenuRef.current &&
        !subMenuRef.current.contains(event.target as Node)
      ) {
        setIsSubMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center font-medium justify-between relative">
      <ul className="md:flex hidden gap-8 items-center">
        <li>
          <div
            className="py-2 px-3 inline-block"
            onClick={() => setIsSubMenuOpen((value) => !value)}
            ref={subMenuRef}
          >
            <span className="cursor-pointer "> Tools</span>
            {isSubMenuOpen && (
              <div
                className="absolute 
              top-16 
              w-max right-[-50%] 
              bg-white p-3 border-[1px]
              border-gray-200 rounded-xl"
              >
                <ul className="grid grid-cols-2 gap-2 px-2">
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
          <Link href={'/about'} className="py-4 px-3 inline-block">
            About
          </Link>
        </li>
        <li>
          <Link href={'/docs'} className="py-4 px-3 inline-block">
            Docs
          </Link>
        </li>
      </ul>
      {/* Mobile setion */}
      <div
        className="
        lg:hidden
        md:hidden
        p-4
        md:py-1
        md:px-2
        border-[1px]
        border-neutral-200
        sm:flex
        flex-row
        items-center
        rounded-full
        cursor-pointer
        hover:shadow-md
        transition
        relative
        
        "
      >
        {mobileNavOpen ? (
          <FaRegWindowClose
            size={20}
            onClick={() => {
              setMobileNavOpen(false);
            }}
          />
        ) : (
          <GiHamburgerMenu
            size={20}
            onClick={() => {
              setMobileNavOpen(true);
            }}
          />
        )}

        {mobileNavOpen && <MobileNav currentUser={currentUser} />}
      </div>
    </div>
  );
};

export default NavMenu;
