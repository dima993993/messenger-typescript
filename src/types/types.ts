export type RulesValidation = {
    isEmpty: boolean,
    isEmail?: boolean,
    minLength: number,
    maxLength: number,
    isValid?: boolean,
}
export type SettingsField = {
    emailError: boolean,
    isDirty: boolean,
    isEmpty: boolean,
    maxLengthError: boolean,
    minLengthError: boolean,
    value: string,
    validInput: boolean,
    onBlur: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeError: (nameField: string, allSettings: SettingsField) => string;
}