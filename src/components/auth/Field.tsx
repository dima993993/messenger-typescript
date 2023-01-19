import React, { FC, useState } from "react";
import styled from "styled-components";

const WrapperField = styled.div`
  .input_block {
    margin: 10px 0;
    input {
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #cccccc;
      outline: none;
      box-sizing: border-box;
    }
  }
  .label_block {
    color: var(--color-text);
  }
`;

interface FieldProps {
  name: string;
  type: string;
}

const Field: FC<FieldProps> = ({ name, type }) => {
  const [textField, setTextField] = useState("");
  console.log(textField);
  return (
    <WrapperField>
      <div>
        <div className='label_block'>
          <h4>{name}</h4>
        </div>
        <div className='input_block'>
          <input
            type={type}
            placeholder={name}
            value={textField}
            onChange={(e) => setTextField(e.target.value)}
          />
        </div>
      </div>
    </WrapperField>
  );
};

export default Field;
