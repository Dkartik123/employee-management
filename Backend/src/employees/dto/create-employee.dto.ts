import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate, IsEnum, IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';
import { EMPLOYEE_CONSTANTS } from '../constants/employee.constants';
import { Office } from '../enums/office.enum';
import { EmployeeCreateData } from '../types/employee.types';

export class CreateEmployeeDto implements EmployeeCreateData {
  @ApiProperty({
    description: 'Employee first name',
    example: 'John'
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(EMPLOYEE_CONSTANTS.MIN_NAME_LENGTH)
  firstName: string;

  @ApiProperty({
    description: 'Employee last name',
    example: 'Doe'
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(EMPLOYEE_CONSTANTS.MIN_NAME_LENGTH)
  lastName: string;

  @ApiProperty({
    description: 'Office location',
    example: 'Riga',
    enum: Office
  })
  @IsNotEmpty()
  @IsEnum(Office)
  office: Office;

  @ApiProperty({
    description: 'Phone number',
    example: '+37120000000'
  })
  @IsNotEmpty()
  @IsString()
  @Matches(EMPLOYEE_CONSTANTS.PHONE_REGEX)
  phone: string;

  @ApiProperty({
    description: 'Employee tags/role',
    example: 'Developer'
  })
  @IsNotEmpty()
  @IsString()
  tags: string;

  @ApiProperty({
    description: 'Employee birth date',
    example: '1990-01-01'
  })
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  birthDate: Date;
} 