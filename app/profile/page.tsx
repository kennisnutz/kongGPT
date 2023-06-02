import React from 'react';
import Container from '../components/Container';
import getCurrentUser from '../actions/getCurrentUser';
import Redirect from './Redirect';
import Form from './Form';

const Profile = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <Redirect />;
  }
  return (
    <Container>
      <div className="title flex flex-col items-center">
        <h4 className="text-5xl font-bold">My Profile</h4>
        <span className="py-4 text-xl w-2/3 text-center text-gray-500">
          You can Edit your profile details.
        </span>
      </div>
      <div className="flex w-full gap-3">
        <div
          className="flex flex-col 
             gap-3 items-center 
             justify-center  border-[1px] 
             border-neutral-300 rounded-lg
             px-5 py-3"
        >
          <Form currentUser={currentUser} />
        </div>
        <div className=""> FEED</div>
      </div>
    </Container>
  );
};

export default Profile;
