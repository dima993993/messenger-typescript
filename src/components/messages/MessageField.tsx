import { SvgIcon, TextField } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import styled from "styled-components";

const WrapperMessageField = styled.div`
  background-color: var(--color-secondary);
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: var(--h-message-field);
  .field_container {
    width: 70%;
    .text_field {
      background-color: var(--color-primary);
      & * {
        color: var(--color-text);
        border: none;
        outline: none;
      }
    }
  }
  .icon_smile {
    color: var(--color-text);
    cursor: pointer;
  }
  .btn_send_message {
    background-color: var(--color-active);
    padding: 8px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    & > * {
      color: var(--color-text-active);
    }
  }
`;

const MessageField = () => {
  return (
    <WrapperMessageField>
      <div className="icon_smile">
        <SvgIcon component={TagFacesIcon} />
      </div>
      <div className="field_container">
        <TextField
          className="text_field"
          variant="outlined"
          multiline
          maxRows={4}
          size="small"
          fullWidth
          placeholder="Enter Message"
          type="text"
        />
      </div>
      <div className="btn_send_message">
        <SvgIcon component={SendIcon} />
      </div>
    </WrapperMessageField>
  );
};

export default MessageField;
