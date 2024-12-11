import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsNotEmpty, IsString, Matches } from 'class-validator';
import { Office } from '../enums/office.enum';

export class CreateEmployeeDto {
  @ApiProperty({
    description: 'Employee first name',
    example: 'John'
  })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({
    description: 'Employee last name',
    example: 'Doe'
  })
  @IsNotEmpty()
  @IsString()
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
    example: '+37120000000',
    pattern: '^\+?[0-9\s-]{8,}$'
  })
  @IsNotEmpty()
  @IsString()
  @Matches(/^\+?[0-9\s-]{8,}$/)
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
    example: '1990-01-01',
    type: Date
  })
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  birthDate: Date;
} 