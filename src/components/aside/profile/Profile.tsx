import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../hooks/redux-hooks";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";

const WrapperProfile = styled.div``;

const Profile = () => {
  const { userInfo } = useAppSelector((state) => state.auth);
  console.log(userInfo);

  return (
    <WrapperProfile>
      <ProfileHeader userInfo={userInfo} />
      <ProfileInfo />
    </WrapperProfile>
  );
};

export default Profile;
