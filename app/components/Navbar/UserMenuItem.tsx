'use client';

interface UserMenuItemProps {
  onClick: () => void;
  label: string;
}

const UserMenuItem: React.FC<UserMenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      className="      
      px-4
      py-3
      hover:bg-neutral-300
      transition
      font-semibold
      rounded-lg 
     
  "
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default UserMenuItem;
