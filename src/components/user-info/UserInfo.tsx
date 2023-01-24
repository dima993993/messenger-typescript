import React from "react";
import styled from "styled-components";

const WrapperUserInfo = styled.div`
  background-color: var(--color-primary);
  width: var(--w-user-info);
  border: 1px solid red;
  flex-shrink: 0;
  margin-right: var(--w-user-info-dif);
`;

const UserInfo = () => {
  return (
    <WrapperUserInfo>
      <div>User Info</div>
    </WrapperUserInfo>
  );
};

export default UserInfo;
