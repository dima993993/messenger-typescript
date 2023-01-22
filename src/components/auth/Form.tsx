import { FC } from "react";
import { useAuthorization } from "../../hooks/auth-user";
import { useField } from "../../hooks/validation";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import Field from "./Field";
import styled from "styled-components";

const WrapperForm = styled.div`
  background-color: var(--color-active);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    background-color: #ffffff;
    border-radius: 20px;
    padding: 40px;
    width: 50%;
    .title {
      text-align: center;
      h2 {
        font-size: 30px;
        color: var(--color-text);
      }
      p {
        margin-top: 10px;
        font-size: 14px;
        color: var(--color-sub-text);
      }
    }
    .inputs {
      margin: 60px auto 0px auto;
      width: 300px;
    }
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
  console.log(email, password);

  return (
    <WrapperForm>
      <div>
        <div className="title">
          <h2>{title}</h2>
          <p>{subTitle}</p>
        </div>
        <div className="error_auth"></div>
        <div className="inputs">
          {title === "Register" && (
            <div>
              <Field name="Full Name" type="text" allSettings={fullName} />
            </div>
          )}
          <Field name="Email" type="text" allSettings={email} />
          <Field name="Password" type="password" allSettings={password} />
        </div>
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
