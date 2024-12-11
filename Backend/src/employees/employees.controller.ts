import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeesService } from './employees.service';
import { Employee } from './entities/employee.entity';

@ApiTags('employees')
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  @ApiOperation({ summary: 'Create new employee' })
  @ApiResponse({ 
    status: 201, 
    description: 'Employee has been successfully created.',
    type: Employee 
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async create(@Body() createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    return this.employeesService.create(createEmployeeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all employees' })
  @ApiResponse({
    status: 200,
    description: 'Return all employees.',
    type: [Employee]
  })
  findAll(): Promise<Employee[]> {
    return this.employeesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get employee by id' })
  @ApiResponse({
    status: 200,
    description: 'Return employee by id.',
    type: Employee
  })
  @ApiResponse({ status: 404, description: 'Employee not found.' })
  findOne(@Param('id') id: string): Promise<Employee> {
    return this.employeesService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update employee by id' })
  @ApiResponse({
    status: 200,
    description: 'Employee has been successfully updated.',
    type: Employee
  })
  @ApiResponse({ status: 404, description: 'Employee not found.' })
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: CreateEmployeeDto,
  ): Promise<Employee> {
    return this.employeesService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete employee by id' })
  @ApiResponse({
    status: 200,
    description: 'Employee has been successfully deleted.'
  })
  @ApiResponse({ status: 404, description: 'Employee not found.' })
  remove(@Param('id') id: string): Promise<void> {
    return this.employeesService.remove(+id);
  }
} 