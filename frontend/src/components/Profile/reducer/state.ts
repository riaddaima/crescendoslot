import { Profile } from '../../../interfaces/Profile';

export const initialState: Profile = {
  firstName: '',
  lastName: '',
  email: '',
  avatar: '',
  gender: 'Male',
  phoneNumber: '',
  isSubbedNewsletter: true,
  role: 'Parent',
  newUser: true
};