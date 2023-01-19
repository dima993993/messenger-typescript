import { FC } from "react";
import { ArrayInputs } from "../../types/types";
import Field from "./Field";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
        padding: 10px;
        background-color: var(--color-active);
        color: #ffffff;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        margin: 20px 0;
      }
    }
  }
`;

interface FormProps {
  inputs: ArrayInputs;
  path: string;
  nameLink: string;
  title: string;
  subTitle: string;
  textLink: string;
}

const Form: FC<FormProps> = ({
  inputs,
  path,
  nameLink,
  title,
  subTitle,
  textLink,
}) => {
  return (
    <WrapperForm>
      <div>
        <div className='title'>
          <h2>{title}</h2>
          <p>{subTitle}</p>
        </div>
        <div className='inputs'>
          {inputs.map((input) => (
            <Field key={input.name} name={input.name} type={input.type} />
          ))}
        </div>
        <div className='btn_block'>
          <div>
            <button>{title}</button>
          </div>
          <div>
            <div>Sign in with</div>
            <div>
              <button>Google</button>
            </div>
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
