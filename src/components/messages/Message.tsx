import { FC } from "react";
import styled from "styled-components";

const WrapperMessage = styled.div``;

type MessageObj = {
  id: number;
  message: string;
  date: string;
};

interface IMessage {
  message: MessageObj;
}

const Message: FC<IMessage> = ({ message }) => {
  return (
    <WrapperMessage>
      <div>{message.message}</div>
    </WrapperMessage>
  );
};

export default Message;
