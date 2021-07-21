export interface IUser {
  username: string;
  displayName: string;
  token: string;
  image?: string;
}

export interface IUserFormValues {
  lastName: string;
  firstName: string;
  middleName: string;
  birthDate?: Date;
  suffix: string;
  gender: string;
  bloodType: string;
  chapter: string;
  schoolName: string;
  address: string;
  contactNumber: string;
  contactPerson: string;
  contactPersonNumber: string;
  dateSurvived: string;
  email: string;
  password: string;
  // displayName?: string;
  // username?: string;
}
