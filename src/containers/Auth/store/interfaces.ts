import { IUser } from "@containers/*";
export interface IAuthState {
  error: null | string;
  loading: boolean;
  authUser: null | Partial<IUser>;
  isAuthentificate: boolean;
  token: string | null;
  modal: boolean;
}
