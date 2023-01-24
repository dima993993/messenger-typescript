import React from "react";
import styled from "styled-components";
import Messages from "./Messages";
import Pattern from "./../../images/pattern.png";
import MessagesHeader from "./MessagesHeader";

const WrapperMessagesContainer = styled.div`
  width: 100%;
  background-color: var(--color-secondary);
  background-image: url(${Pattern});
  height: var(--h-page);
`;

const MessagesContainer = () => {
  return (
    <WrapperMessagesContainer>
      <MessagesHeader />
      <div>
        <Messages />
      </div>
      <div></div>
    </WrapperMessagesContainer>
  );
};

export default MessagesContainer;
