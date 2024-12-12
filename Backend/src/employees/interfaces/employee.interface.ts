import { Office } from '../enums/office.enum';

export interface IEmployee {
  id: number;
  firstName: string;
  lastName: string;
  office: Office;
  phone: string;
  tags: string;
  birthDate: Date;
} 