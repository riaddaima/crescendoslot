import { Profile } from '../../../interfaces/Profile';

export const initialState: Profile = {
  userId: '',
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