import { FC } from "react";
import { SettingsField } from "../../types/types";
import { Button } from "@mui/material";
import styled from "styled-components";

const WrapperBtnBlock = styled.div`
  width: 300px;
  margin: 0 auto;
  button {
    width: 100%;
    padding: 8px;
    margin: 10px 0;
  }
  .btn_auth {
    background-color: var(--color-active);
    &:hover {
      background-color: var(--color-active);
    }
  }
  .google_button {
    color: var(--color-active);
    border: 1px solid var(--color-active);
    &:hover {
      border: 1px solid var(--color-active);
    }
  }
  .disabled {
    cursor: not-allowed;
  }
`;

interface IBtnBlock {
  email: SettingsField;
  password: SettingsField;
  fullName: SettingsField;
  title: string;
  googleAuth: () => void;
  handleClick: (
    email: string,
    password: string,
    userName?: string | undefined
  ) => void;
}

const BtnBlock: FC<IBtnBlock> = ({
  email,
  password,
  handleClick,
  title,
  googleAuth,
  fullName,
}) => {
  return (
    <WrapperBtnBlock>
      <div
        className={
          !(email.validInput && password.validInput) ? "disabled" : ""
        }>
        <Button
          variant='contained'
          onClick={() => {
            handleClick(email.value, password.value, fullName.value);
          }}
          disabled={!(email.validInput && password.validInput)}
          className='btn_auth'>
          {title}
        </Button>
      </div>
      <div>
        <Button
          variant='outlined'
          onClick={googleAuth}
          className='google_button'>
          Google
        </Button>
      </div>
    </WrapperBtnBlock>
  );
};

export default BtnBlock;
