export interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  gender: string;
  phoneNumber: string;
  isSubbedNewsletter: boolean;
  role: 'Manager' | 'Parent';
}

export const initialState: Profile = {
  firstName: '',
  lastName: '',
  email: '',
  avatar: '',
  gender: '',
  phoneNumber: '',
  isSubbedNewsletter: false,
  role: 'Parent'
};