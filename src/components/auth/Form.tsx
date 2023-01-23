import { FC } from "react";
import { useAuthorization } from "../../hooks/auth-user";
import { useField } from "../../hooks/validation";
import { NavLink } from "react-router-dom";
import TitleBlock from "./TitleBlock";
import InputsBlock from "./InputsBlock";
import BtnBlock from "./BtnBlock";
import authImg from "./../../images/authImg.png";
import styled from "styled-components";
import varibles from "./../../scss/varibles.scss";
import { useAppSelector } from "../../hooks/redux-hooks";

const WrapperForm = styled.div`
  background-color: var(--color-active);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 40px 0;
  .img_block {
    width: 40%;
    margin-right: -15%;
    z-index: 99;
    & > div {
      margin-top: 50px;
    }
    img {
      width: 100%;
    }
  }
  .form_paper {
    min-height: 70vh;
    background-color: #ffffff;
    border-radius: 20px;
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    & > div {
      width: 70%;
    }
    .link_block {
      text-align: center;
    }
    .error_auth {
      color: #ff0000;
      font-size: 12px;
      margin-top: 20px;
    }
  }
`;

interface FormProps {
  path: string;
  nameLink: string;
  title: string;
  subTitle: string;
  textLink: string;
  handleClick: (
    email: string,
    password: string,
    userName?: string | undefined
  ) => void;
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
  // const { error }: any = useAppSelector((state) => state.user.error);
  const { googleAuth } = useAuthorization();
  const { error } = useAppSelector((state) => state.user);

  return (
    <WrapperForm>
      <div className="img_block">
        <div>
          <h1>Doot</h1>
        </div>
        <div>
          <img src={authImg} alt="Doot" />
        </div>
      </div>
      <div className="form_paper">
        <div>
          <TitleBlock title={title} subTitle={subTitle} />
          <div className="error_auth">
            {error && "Не корректно введены данные!"}
          </div>
          <InputsBlock
            title={title}
            fullName={fullName}
            email={email}
            password={password}
          />

          <BtnBlock
            email={email}
            password={password}
            googleAuth={googleAuth}
            title={title}
            handleClick={handleClick}
            fullName={fullName}
          />
          <div className="link_block">
            {textLink}
            <NavLink to={path}>{nameLink}</NavLink>
          </div>
        </div>
      </div>
    </WrapperForm>
  );
};

export default Form;
