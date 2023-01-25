import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { toggleUserInfoPanel } from "../../store/slice/supportSlice";

const WrapperUserInfo = styled.div`
  background-color: var(--color-primary);
  width: var(--w-user-info);
  flex-shrink: 0;
  transition: margin 0.5s;
  .close_icon {
    cursor: pointer;
  }
`;

const UserInfo = () => {
  const dispatch = useAppDispatch();
  const { userInfoPanel } = useAppSelector((state) => state.support);

  return (
    <WrapperUserInfo
      style={
        userInfoPanel
          ? { marginRight: 0 }
          : { marginRight: "var(--w-user-info-dif)" }
      }
    >
      <div>User Info</div>
      <div
        className="close_icon"
        onClick={() => dispatch(toggleUserInfoPanel(false))}
      >
        X
      </div>
    </WrapperUserInfo>
  );
};

export default UserInfo;
