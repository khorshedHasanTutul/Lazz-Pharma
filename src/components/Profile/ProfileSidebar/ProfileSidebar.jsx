import React from "react";
import { BASE_URL } from "../../../Service/httpService";
import SidebarLinks from "../SidebarLinks/SidebarLinks";

const ProfileSidebar = ({ profileInfo }) => {
  return (
    <div class="profile-sidebar">
      <div class="profile-sidebar-inner">
        <div class="profile-short-desc">
          {profileInfo.Image === null ? (
            <img src="/Contents/assets/image/user.png" alt="img" />
          ) : (
            <img src={`${BASE_URL}/${profileInfo.Image}`} alt="img" />
          )}

          <p>{profileInfo.Name}</p>
          <p>{profileInfo.Email}</p>
          <aside>
            My Wallet: <span>{profileInfo?.Cashbacks}</span>
          </aside>
          <aside>
            Pending Cash: <span>{profileInfo?.Pending}BDT</span>
          </aside>
        </div>
        <SidebarLinks />
      </div>
    </div>
  );
};

export default ProfileSidebar;
