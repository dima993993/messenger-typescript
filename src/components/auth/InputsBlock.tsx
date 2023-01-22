import { FC } from "react";
import styled from "styled-components";
import { SettingsField } from "../../types/types";
import Field from "./Field";

const WrapperInputsBlock = styled.div`
  margin: 60px auto 0px auto;
  width: 300px;
`;
interface IInputsBlock {
  title: string;
  fullName: SettingsField;
  email: SettingsField;
  password: SettingsField;
}

const InputsBlock: FC<IInputsBlock> = ({
  title,
  fullName,
  email,
  password,
}) => {
  return (
    <WrapperInputsBlock>
      {title === "Register" && (
        <div>
          <Field name="Full Name" type="text" allSettings={fullName} />
        </div>
      )}
      <Field name="Email" type="text" allSettings={email} />
      <Field name="Password" type="password" allSettings={password} />
    </WrapperInputsBlock>
  );
};

export default InputsBlock;
