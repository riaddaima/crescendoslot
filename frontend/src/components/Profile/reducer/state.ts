import { Profile } from '../../../interfaces/Profile';

export const initialState: Profile = {
  firstName: '',
  lastName: '',
  email: '',
  avatar: '',
  gender: 'Male',
  phoneNumber: '',
  isSubbedNewsletter: false,
  role: 'Parent',
  newUser: true
};