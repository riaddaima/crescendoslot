import { AuthState } from "./types";

export interface LoginResponse extends AuthState {
  token: string;
}