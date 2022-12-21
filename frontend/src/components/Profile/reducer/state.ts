import { Profile } from '../../../interfaces/Profile';

export const initialState: Profile = {
  firstName: '',
  lastName: '',
  email: '',
  avatar: '',
  gender: 'M',
  phoneNumber: '',
  isSubbedNewsletter: false,
  role: 'parent',
  newUser: true
};