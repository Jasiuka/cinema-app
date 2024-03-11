export const ModalComponents = {};

export type User = {
  credentials: {
    email: string;
    password: string;
  };
  userData: {
    firstName: string;
    lastName: string;
    birthdate: Date;
  };
};

export type InputObject = {
  name: string;
  type: string;
  label: string;
};
