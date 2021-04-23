export interface IPerson {
  id?: string;
  controlNumber: string;
  lastName: string;
  firstName: string;
  middleName: string;
  birthDate?: Date;
  suffix: string;
  gender: string;
  bloodType: string;
  schoolName: string;
  address: string;
  contactNumber: string;
  contactPerson: string;
  dateSurvived?: Date;
  regionalChansellor: string;
  grandChansellor: string;

  // Add photo here
}

export interface IPersonFormValues extends Partial<IPerson>{
  // id: string;
  // controlNumber: string;
  // lastName: string;
  // firstName: string;
  // middleName: string;
  // birthDate: Date;
  // suffix: string;
  // gender: string;
  // bloodType: string;
  // schoolName: string;
  // address: string;
  // contactNumber: string;
  // contactPerson: string;
  // dateSurvived: Date;
  // regionalChansellor: string;
  // grandChansellor: string;
}

export class PersonFormValues implements IPersonFormValues {
  id?: string = undefined;
  controlNumber: string = '';
  lastName: string = '';
  firstName: string = '';
  middleName: string = '';
  birthDate?: Date = undefined;
  suffix: string = '';
  gender: string = '';
  bloodType: string = '';
  schoolName: string = '';
  address: string = '';
  contactNumber: string = '';
  contactPerson: string = '';
  dateSurvived?: Date = undefined;
  regionalChansellor: string = '';
  grandChansellor: string = '';

  constructor(init?: IPersonFormValues) {
    Object.assign(this, init);
  }
}
