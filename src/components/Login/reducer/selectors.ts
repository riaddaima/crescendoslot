import { RootState } from '../../../app/store';

export const signupSelector = (state: RootState) => state.login.jwt;
