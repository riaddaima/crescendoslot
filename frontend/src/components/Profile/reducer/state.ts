import { Profile } from '../../../interfaces/Profile';

interface profileState {
  profile: Profile;
}

export const initialState: profileState = {
  profile: {
    userId: '',
    firstName: '',
    lastName: '',
    email: '',
    avatar: '',
    phoneNumber: '',
    isSubbedNewsletter: false,
    role: 'parent',
    newUser: true
  }
};