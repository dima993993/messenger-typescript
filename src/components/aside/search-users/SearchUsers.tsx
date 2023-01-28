import React from "react";
import styled from "styled-components";
import UserItem from "../UserItem";
import HeaderAside from "./../HeaderAside";
let arr = [
  { id: 1, name: "Vasya" },
  { id: 2, name: "Petya" },
  { id: 3, name: "Sasha" },
];
const WrapperSearchUsers = styled.div``;
const SearchUsers = () => {
  return (
    <WrapperSearchUsers>
      <HeaderAside title="Find Users" />
      {arr.map((user) => (
        <UserItem key={user.id} item={user} symbol="+" />
      ))}
    </WrapperSearchUsers>
  );
};

export default SearchUsers;
