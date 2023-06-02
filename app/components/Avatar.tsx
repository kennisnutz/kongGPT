'use client';

import Image from 'next/image';

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      width={40}
      height={40}
      src={src || '/assets/images/profile.png'}
      alt="profile_image"
      className="cursor-pointer rounded-full"
    />
  );
};

export default Avatar;
