export const ModalComponents = {};

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
