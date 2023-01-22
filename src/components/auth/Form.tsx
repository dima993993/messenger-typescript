import { FC, useState } from "react";
import { useAuthorization } from "../../hooks/auth-user";
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
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const { googleAuth } = useAuthorization();
  return (
    <WrapperForm>
      <div>
        <div className="title">
          <h2>{title}</h2>
          <p>{subTitle}</p>
        </div>
        <div className="inputs">
          {title === "Register" && (
            <div>
              <Field name="Name" type="text" value={name} setValue={setName} />
              <Field
                name="Surname"
                type="text"
                value={surname}
                setValue={setSurname}
              />
            </div>
          )}
          <Field name="Email" type="text" value={email} setValue={setEmail} />
          <Field
            name="Password"
            type="password"
            value={pass}
            setValue={setPass}
          />
        </div>
        <div className="btn_block">
          <div>
            <Button
              variant="contained"
              style={{ backgroundColor: "var(--color-active)" }}
              onClick={() => handleClick(email, pass)}
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
