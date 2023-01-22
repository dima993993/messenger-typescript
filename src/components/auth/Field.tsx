import { FC } from "react";
import styled from "styled-components";
import { SettingsField } from "../../types/types";

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
  .error {
    color: red;
    font-size: 12px;
    height: 12px;
  }
  .error_input {
    border: 1px solid #ff0000 !important;
  }
  .correct_input {
    border: 1px solid #cccccc !important;
  }
`;

interface FieldProps {
  name: string;
  type: string;
  allSettings: SettingsField;
}

const Field: FC<FieldProps> = ({ name, type, allSettings }) => {
  return (
    <WrapperField>
      <div>
        <div className="label_block">
          <h4>{name}</h4>
        </div>
        <div className="error">
          {allSettings.isDirty && allSettings.changeError(name, allSettings)}
        </div>
        <div className="input_block">
          <input
            className={
              allSettings.isDirty && allSettings.changeError(name, allSettings)
                ? "error_input"
                : "correct_input"
            }
            type={type}
            placeholder={name}
            value={allSettings.value}
            onChange={(e) => allSettings.onChange(e)}
            onBlur={() => allSettings.onBlur()}
          />
        </div>
      </div>
    </WrapperField>
  );
};

export default Field;
