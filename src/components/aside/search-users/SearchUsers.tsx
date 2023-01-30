import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../hooks/redux-hooks";
import { TAuthUser } from "../../../types/types";
import UserItem from "../UserItem";
import HeaderAside from "./../HeaderAside";

const WrapperSearchUsers = styled.div``;
const SearchUsers = () => {
  const { allUsers }: any = useAppSelector((state) => state.user);
  return (
    <WrapperSearchUsers>
      <HeaderAside title="Find Users" />
      {allUsers.map((user: TAuthUser) => (
        <UserItem
          key={user.uid}
          userName={user.name}
          photo={user.photo}
          uid={user.uid}
          symbol="+"
        />
      ))}
    </WrapperSearchUsers>
  );
};

export default SearchUsers;
