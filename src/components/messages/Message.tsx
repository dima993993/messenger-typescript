import { FC } from "react";
import styled from "styled-components";

const WrapperMessage = styled.div`
  clear: both;
  .message {
    padding: 10px;
    border-radius: 5px;
    margin: 10px 0;
  }
  .myMessage {
    background-color: var(--color-sub-active);
    color: var(--color-text-active);
  }
  .yourMessage {
    background-color: var(--color-message);
    color: var(--color-text);
  }
  .date {
    color: var(--color-text);
    margin: 10px 0;
    font-size: 12px;
  }
  .myDate {
    text-align: right;
  }
`;

type MessageObj = {
  id: number;
  message: string;
  date: string;
};

interface IMessage {
  message: MessageObj;
  authUserId: number;
}

const Message: FC<IMessage> = ({ message, authUserId }) => {
  const fullDate = message.date.split(" ");
  const time = fullDate[1].split(":");
  return (
    <WrapperMessage
      style={
        authUserId === message.id ? { float: "right" } : { float: "left" }
      }>
      <div
        className={
          authUserId === message.id
            ? "message myMessage"
            : "message yourMessage"
        }>
        {message.message}
      </div>
      <div className={authUserId === message.id ? "date myDate" : "date"}>
        {time[0] + ":" + time[1]}
      </div>
    </WrapperMessage>
  );
};

export default Message;
