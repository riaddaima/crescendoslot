interface loginState {
  jwt: null | string;
}

export const initialState: loginState = {
  jwt: null,
};