import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Office } from '../enums/office.enum';
import { IEmployee } from '../interfaces/employee.interface';

@Entity()
export class Employee implements IEmployee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    type: 'enum',
    enum: Office
  })
  office: Office;

  @Column()
  phone: string;

  @Column()
  tags: string;

  @Column('date')
  birthDate: Date;
} 