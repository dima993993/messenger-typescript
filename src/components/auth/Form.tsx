import { FC } from "react";
import { useAuthorization } from "../../hooks/auth-user";
import { useField } from "../../hooks/validation";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import authImg from "./../../images/authImg.png";
import styled from "styled-components";
import TitleBlock from "./TitleBlock";
import InputsBlock from "./InputsBlock";

const WrapperForm = styled.div`
  background-color: var(--color-active);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  & > div {
    background-color: #ffffff;
    border-radius: 20px;
    padding: 40px;
    width: 50%;
    .btn_block {
      text-align: center;
      button {
        width: 300px;
        padding: 8px;
        margin: 10px 0;
      }
    }
    .disabled {
      cursor: not-allowed;
    }
  }
  .img_block {
    background-color: transparent;
    width: 300px;
    img {
      width: 100%;
    }
  }
`;

interface FormProps {
  path: string;
  nameLink: string;
  title: string;
  subTitle: string;
  textLink: string;
  handleClick: (email: string, password: string) => void;
}

const Form: FC<FormProps> = ({
  path,
  nameLink,
  title,
  subTitle,
  textLink,
  handleClick,
}) => {
  const email = useField("", {
    isEmpty: true,
    minLength: 5,
    maxLength: 25,
    isEmail: false,
    isValid: false,
  });
  const password = useField("", {
    isEmpty: true,
    minLength: 5,
    maxLength: 12,
    isValid: false,
  });
  const fullName = useField("", {
    isEmpty: true,
    minLength: 3,
    maxLength: 25,
  });

  const { googleAuth } = useAuthorization();
  console.log(email);

  return (
    <WrapperForm>
      <div className="img_block">
        <img src={authImg} alt="Doot" />
      </div>
      <div>
        <TitleBlock title={title} subTitle={subTitle} />
        <div className="error_auth"></div>
        <InputsBlock
          title={title}
          fullName={fullName}
          email={email}
          password={password}
        />
        <div className="btn_block">
          <div
            className={
              !(email.validInput && password.validInput) ? "disabled" : ""
            }
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: "var(--color-active)",
              }}
              onClick={() => handleClick(email.value, password.value)}
              disabled={!(email.validInput && password.validInput)}
            >
              {title}
            </Button>
          </div>
          <div>
            <Button
              variant="outlined"
              style={{
                borderColor: "var(--color-active)",
                color: "var(--color-active)",
              }}
              onClick={googleAuth}
            >
              Google
            </Button>
          </div>
          <div>
            {textLink}
            <NavLink to={path}>{nameLink}</NavLink>
          </div>
        </div>
      </div>
    </WrapperForm>
  );
};

export default Form;
