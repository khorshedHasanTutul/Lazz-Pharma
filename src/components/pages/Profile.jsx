import React from "react";
import ProfileBody from "../Profile/ProfileBody/ProfileBody";
import ProfileSidebar from "../Profile/ProfileSidebar/ProfileSidebar";


const Profile = () => {
  return (
    <section class="profile-area">
      <div class="container">
        <div class="profile-main">
          <ProfileSidebar />
          <ProfileBody />
        </div>
      </div>
    </section>
  );
};

export default Profile;
