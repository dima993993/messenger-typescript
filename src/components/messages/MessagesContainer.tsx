import React from "react";
import styled from "styled-components";
import Messages from "./Messages";
import Pattern from "./../../images/pattern.png";
import MessagesHeader from "./MessagesHeader";
import MessageField from "./MessageField";

export const WrapperMessagesContainer = styled.div`
  width: 100%;
  background-color: var(--color-secondary);
  background-image: url(${Pattern});
  height: var(--h-page);
`;

const MessagesContainer = () => {
  return (
    <WrapperMessagesContainer>
      <MessagesHeader />
      <Messages />
      <MessageField />
    </WrapperMessagesContainer>
  );
};

export default MessagesContainer;
