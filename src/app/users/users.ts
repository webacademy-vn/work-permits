import { User } from './user';

export const ELEMENT_DATA: User[] = [
  { userId: 1, userFullName: 'Vladyslav Nahornyi', userEmail: 'logan0mcv@gmail.com', userRole: 0, userIsActive: true, userIsVerified: true },
  { userId: 2, userFullName: 'Oleg Ignatenko', userEmail: 'gnaten321@mail.com', userRole: 3, userIsActive: true, userIsVerified: false },
  { userId: 3, userFullName: 'Sergii Nagornyi', userEmail: 'snagornyi@putlook.com', userRole: 1, userIsActive: true, userIsVerified: false },
];

export const USER_ROLES = [
  { id: 1, roleName: 'Super Admin', root: 'test' },
  { id: 2, roleName: 'Head of Safety', root: 'test' },
  { id: 3, roleName: 'User', root: 'test' },
  { id: 4, roleName: 'Head of Division', root: 'test' }
];

export const USER_PERMITS = [

];