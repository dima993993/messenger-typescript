import { Avatar, SvgIcon } from "@mui/material";
import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { toggleUserInfoPanel } from "../../store/slice/supportSlice";

const WrapperMessagesHeader = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-secondary);
  position: sticky;
  .profile {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icons_block {
    display: flex;
    align-items: center;
  }
  .icon {
    cursor: pointer;
    font-size: 22px;
    margin-right: 10px;
    color: var(--color-text);
  }
  .name_block {
    color: var(--color-text);
    margin-left: 20px;
  }
  .status {
    color: var(--color-sub-text);
    font-size: 12px;
  }
`;

const MessagesHeader = () => {
  const dispatch = useAppDispatch();
  const { userInfoPanel } = useAppSelector((state) => state.support);
  return (
    <WrapperMessagesHeader>
      <div
        className="profile"
        onClick={() =>
          dispatch(toggleUserInfoPanel(true)) && console.log(userInfoPanel)
        }
      >
        <div>
          <Avatar />
        </div>
        <div className="name_block">
          <div>Name</div>
          <div className="status">Online</div>
        </div>
      </div>
      <div className="icons_block">
        <div>
          <SvgIcon component={SearchOutlinedIcon} className="icon" />
        </div>
        <div>
          <SvgIcon
            component={FormatListBulletedOutlinedIcon}
            className="icon"
          />
        </div>
      </div>
    </WrapperMessagesHeader>
  );
};

export default MessagesHeader;
