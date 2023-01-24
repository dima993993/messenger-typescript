import React from "react";
import styled from "styled-components";
import Message from "./Message";

const WrapperMessages = styled.div``;

const listMessages = [
  { id: 1, message: "Hello", date: "12.20.2021 13:45:36" },
  { id: 1, message: "How are you?", date: "12.20.2021 13:46:55" },
  { id: 2, message: "Hello", date: "12.20.2021 13:46:55" },
  { id: 2, message: "I am fine!", date: "12.20.2021 13:46:55" },
  { id: 2, message: "And you?", date: "12.20.2021 13:46:55" },
  { id: 1, message: "I am fine too =)", date: "12.20.2021 13:46:55" },
];

const Messages = () => {
  return (
    <WrapperMessages>
      {listMessages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </WrapperMessages>
  );
};

export default Messages;
