export interface Profile {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  phoneNumber: string;
  isSubbedNewsletter: boolean;
  role: 'manager' | 'parent';
  newUser: boolean;
}