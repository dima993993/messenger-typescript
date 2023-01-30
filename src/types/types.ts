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

export type TAuthUser= {
    uid: string,
    name: string,
    phone: string | null,
    photo: string | null,
    email: string,
    status: string | null,
    aboutUser: string | null,
    location: string | null,
    contacts: any,
    dialogs: any,
    media: any,
}