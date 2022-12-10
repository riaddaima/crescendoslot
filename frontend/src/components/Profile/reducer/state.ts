export interface Profile {
  firstname: string;
  lastname: string;
  email: string;
  avatar: string;
  gender: string;
  phonenumber: string;
  isSubbedNewsletter: boolean;
  role: 'Manager' | 'Parent';
}

export const initialState: Profile = {
  firstname: '',
  lastname: '',
  email: '',
  avatar: '',
  gender: '',
  phonenumber: '',
  isSubbedNewsletter: false,
  role: 'Parent'
};