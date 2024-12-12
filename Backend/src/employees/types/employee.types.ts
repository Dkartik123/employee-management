import { IEmployee } from '../interfaces/employee.interface';

export type EmployeeCreateData = Omit<IEmployee, 'id'>;
export type EmployeeUpdateData = Partial<EmployeeCreateData>; 