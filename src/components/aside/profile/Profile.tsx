import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../hooks/redux-hooks";
import { TAuthUser } from "../../../types/types";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";

const WrapperProfile = styled.div``;

const Profile = () => {
  const { authUser }: any = useAppSelector((state) => state.user);
  console.log(authUser);

  if (!authUser) return null;
  return (
    <WrapperProfile>
      <ProfileHeader
        photo={authUser.photo}
        userName={authUser.name}
        status={authUser.status}
      />
      <ProfileInfo />
    </WrapperProfile>
  );
};

export default Profile;
