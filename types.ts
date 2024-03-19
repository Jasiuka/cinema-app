export type User = {
  credentials: UserCredentials;
  userData: {
    firstName: string;
    lastName: string;
    birthdate: Date;
  };
};

export type UserCredentials = {
  email: string;
  password: string;
};

export enum ButtonStyle {
  REGULAR = "regular",
  INVERTED = "inverted",
  LINK = "link",
  INHERITED = "inherited",
}

export type InputEmit = {
  value: string;
  inputName: string;
};

export type DropdownList = DropdownItem[];

export type DropdownItem = {
  text: string;
  link: string;
  type: string;
};

export enum ModalComponents {
  AUTH = "auth",
  DELETE_ACCOUNT = "delete-account",
}
