import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
  @ApiProperty({
    description: 'Unique identifier',
    example: 1
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Employee first name',
    example: 'John'
  })
  @Column()
  firstName: string;

  @ApiProperty({
    description: 'Employee last name',
    example: 'Doe'
  })
  @Column()
  lastName: string;

  @ApiProperty({
    description: 'Office location',
    example: 'Riga',
    enum: ['Riga', 'Tallinn', 'Vilnius']
  })
  @Column()
  office: string;

  @ApiProperty({
    description: 'Phone number',
    example: '+37120000000'
  })
  @Column()
  phone: string;

  @ApiProperty({
    description: 'Employee tags/role',
    example: 'Developer'
  })
  @Column()
  tags: string;

  @ApiProperty({
    description: 'Employee birth date',
    example: '1990-01-01',
    type: Date
  })
  @Column('date')
  birthDate: Date;
} 