import React, { useEffect, useState } from "react";
import { GET_USER_INFO } from "../../lib/endpoints";
import { http } from "../../Service/httpService";
import ProfileBody from "../Profile/ProfileBody/ProfileBody";
import ProfileSidebar from "../Profile/ProfileSidebar/ProfileSidebar";

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState([]);
  const getProfileInfo = () => {
    http.get({
      url: GET_USER_INFO,
      before: () => {},
      successed: (res) => {
        console.log(res.Data);
        setProfileInfo(res.Data.Customer);
      },
      failed: () => {},
      always: () => {},
    });
  };
  useEffect(() => {
    getProfileInfo();
  }, []);
  return (
    <section class="profile-area">
      <div class="container">
        <div class="profile-main">
          <ProfileSidebar profileInfo={profileInfo}/>
          <ProfileBody getProfileInfo={getProfileInfo} />
        </div>
      </div>
    </section>
  );
};

export default Profile;
