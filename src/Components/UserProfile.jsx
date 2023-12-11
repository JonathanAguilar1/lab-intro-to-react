import React from 'react';
import Posts from './Posts';
import ContactUserCard from './ContactUserCard';

function UserProfile() {
  return (
    <div className="user-profile">
      {/* UserPosts section */}
      <div className="user-posts">
        <h3>User Posts</h3>
        <Posts />
      </div>

      {/* Contacts section */}
      <div className="contacts">
        <h3>Contacts</h3>
        <ContactUserCard />
        {/* Add more contact cards if needed */}
      </div>
    </div>
  );
}

export default UserProfile;