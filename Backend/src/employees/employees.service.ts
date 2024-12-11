import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    try {
      console.log('Service: Creating employee');
      console.log('Service: Data:', createEmployeeDto);
      
      // Преобразуем дату в правильный формат
      const employee = this.employeeRepository.create({
        ...createEmployeeDto,
        birthDate: new Date(createEmployeeDto.birthDate)
      });
      
      const result = await this.employeeRepository.save(employee);
      console.log('Service: Created employee:', result);
      return result;
    } catch (error) {
      console.error('Service: Error creating employee:', error);
      throw error;
    }
  }

  findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  findOne(id: number): Promise<Employee> {
    return this.employeeRepository.findOne({ where: { id } });
  }

  async update(id: number, updateEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    await this.employeeRepository.update(id, updateEmployeeDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.employeeRepository.delete(id);
  }
} 