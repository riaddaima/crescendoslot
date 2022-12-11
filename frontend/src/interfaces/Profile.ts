export interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  gender: 'Male' | 'Female';
  phoneNumber: string;
  isSubbedNewsletter: boolean;
  role: 'Manager' | 'Parent';
}