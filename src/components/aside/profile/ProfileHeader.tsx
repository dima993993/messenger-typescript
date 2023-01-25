import { Avatar, SvgIcon } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";
import { UserInfo } from "../../../types/types";
import profilePattern from "./../../../images/profilePattern.jpg";
import EditIcon from "@mui/icons-material/Edit";
const WrapperProfileHeader = styled.div`
  & > div:first-child {
    height: 150px;
    background-image: url(${profilePattern});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;
    color: var(--color-text-active);
    position: relative;
    &:after {
      content: "";
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .title {
      font-size: 20px;
      z-index: 9;
    }
    .edit {
      z-index: 9;
      height: 30px;
      width: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: var(--color-text);
      background-color: var(--color-primary);
      border-radius: 50%;
      & > * {
        font-size: 18px;
      }
    }
  }
  & > div:last-child {
    text-align: center;
    .avatar {
      border: 1px solid red;
    }
    .status {
      color: var(--color-sub-text);
      font-size: 12px;
      margin-top: 10px;
    }
    .name {
      font-size: 18px;
      color: var(--color-text);
    }
  }
`;
interface IProfileHeader {
  userInfo: any;
}

const ProfileHeader: FC<IProfileHeader> = ({ userInfo }) => {
  return (
    <WrapperProfileHeader>
      <div>
        <div className="title">My Profile</div>
        <div className="edit">
          <SvgIcon component={EditIcon} />
        </div>
      </div>
      <div>
        <Avatar
          src={userInfo.photoURL}
          sx={{ width: 70, height: 70, margin: "-40px auto 20px auto" }}
        />
        <div className="name">{userInfo.displayName}</div>
        <div className="status">Status</div>
      </div>
    </WrapperProfileHeader>
  );
};

export default ProfileHeader;
