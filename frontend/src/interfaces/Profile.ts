export interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  gender: 'M' | 'F';
  phoneNumber: string;
  isSubbedNewsletter: boolean;
  role: 'manager' | 'parent';
  newUser: boolean;
}