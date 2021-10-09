import { createActionTypes } from "@utils/";

export const AUTH_ACTION_TYPES = [
  "SIGN_IN",
  "SIGN_UP",
  "RESET_PASSWORD",
  "FORGOT_PASSWORD",
  "ACCOUNT_ACTIVATION",
  "SIGN_OUT",
];
export const authActionTypes = createActionTypes(AUTH_ACTION_TYPES);
