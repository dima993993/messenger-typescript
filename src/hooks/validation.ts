import { RulesValidation, SettingsField } from './../types/types';
import React, { useEffect, useState } from "react";

const useValidation = (value:string, validations:RulesValidation) => {
  const [isEmpty, setEmpty] = useState(true); // Проверка на пустое поле
  const [minLengthError, setMinLengthError] = useState(false); // Минимальная длинна введенных символов
  const [maxLengthError, setMaxLengthError] = useState(false); // Максимальная длинна введенных символов
  const [emailError, setEmailError] = useState(false); // Проверка на корректность эмейла
  const [validInput, setValidInput] = useState(false); // Проверка на валидность всех полей
  
  useEffect((): any => {
    for (let validation in validations) {
      switch (validation) {
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case "maxLength":
          value.length > validations[validation]
            ? setMaxLengthError(true)
            : setMaxLengthError(false);
          break;
        case 'isEmail':
            const regExpForEmail = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
            regExpForEmail.test(String(value)) ? setEmailError(false) : setEmailError(true);
            break;
        case 'isValid':
            if(isEmpty || minLengthError || maxLengthError || emailError) {
                setValidInput(false);
            }else {
                setValidInput(true);
            }
            break;
        default:
          return "";
      }
    }
  }, [value]);

  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    emailError,
    validInput,
  };
};

export const useField = (initialValue: string, validation: RulesValidation) => {
  const [value, setValue] = useState(initialValue); // Значение которое мы вводим в поле
  const [isDirty, setDirty] = useState(false); // Запускать правила валидации по потери фокуса
  const valid = useValidation(value, validation);
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };
  const onBlur = (): void => {
    setDirty(true);
  };
  const changeError = (nameField: string, allSettings: SettingsField) => {
    
    switch (true) {
        case allSettings.isEmpty:
          return "Поле не может быть пустым";
        case allSettings.minLengthError:
          return `${nameField} должен быть длинее`;
        case allSettings.maxLengthError:
          return `${nameField} должен быть короче`;
        case allSettings.emailError:
          return `${nameField} не корректный`;
        default:
          return "";
      }
}
  return {
    value,
    isDirty,
    onBlur,
    onChange,
    setValue,
    changeError,
    ...valid,
  };
};