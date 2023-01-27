import React from "react";
import styled from "styled-components";
import Message from "./Message";

const WrapperMessages = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const listMessages = [
  { id: 1, message: "Hello", date: "12.20.2021 13:45:36" },
  { id: 1, message: "How are you?", date: "12.20.2021 13:46:55" },
  { id: 2, message: "Hello", date: "12.20.2021 13:46:55" },
  { id: 2, message: "I am fine!", date: "12.20.2021 13:46:55" },
  { id: 2, message: "And you?", date: "12.20.2021 13:46:55" },
  { id: 1, message: "I am fine too =)", date: "12.20.2021 13:46:55" },
];

const Messages = () => {
  let myId = 1;
  return (
    <WrapperMessages>
      {listMessages.map((message, index) => (
        <Message key={index} message={message} authUserId={myId} />
      ))}
    </WrapperMessages>
  );
};

export default Messages;
