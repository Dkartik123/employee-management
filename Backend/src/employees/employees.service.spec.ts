import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import 'reflect-metadata';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeesService } from './employees.service';
import { Employee } from './entities/employee.entity';
import { Office } from './enums/office.enum';

describe('EmployeesService', () => {
  let service: EmployeesService;
  let repository: Repository<Employee>;

  const mockEmployee = {
    id: 1,
    firstName: 'Test',
    lastName: 'User',
    office: Office.RIGA,
    phone: '+37120000000',
    tags: 'Developer',
    birthDate: new Date('1990-01-01'),
  };

  const mockRepository = {
    create: jest.fn().mockReturnValue(mockEmployee),
    save: jest.fn().mockResolvedValue(mockEmployee),
    find: jest.fn().mockResolvedValue([mockEmployee]),
    findOne: jest.fn().mockResolvedValue(mockEmployee),
    update: jest.fn().mockResolvedValue({ affected: 1 }),
    delete: jest.fn().mockResolvedValue({ affected: 1 }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmployeesService,
        {
          provide: getRepositoryToken(Employee),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<EmployeesService>(EmployeesService);
    repository = module.get<Repository<Employee>>(getRepositoryToken(Employee));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should successfully create an employee', async () => {
      const dto: CreateEmployeeDto = {
        firstName: 'Test',
        lastName: 'User',
        office: Office.RIGA,
        phone: '+37120000000',
        tags: 'Developer',
        birthDate: new Date('1990-01-01'),
      };

      const result = await service.create(dto);
      
      expect(repository.create).toHaveBeenCalledWith(expect.objectContaining(dto));
      expect(repository.save).toHaveBeenCalled();
      expect(result).toEqual(mockEmployee);
    });

    it('should handle errors during creation', async () => {
      const dto: CreateEmployeeDto = {
        firstName: 'Test',
        lastName: 'User',
        office: Office.RIGA,
        phone: '+37120000000',
        tags: 'Developer',
        birthDate: new Date('1990-01-01'),
      };

      jest.spyOn(repository, 'save').mockRejectedValueOnce(new Error('Database error'));

      await expect(service.create(dto)).rejects.toThrow('Database error');
    });
  });

  describe('findAll', () => {
    it('should return an array of employees', async () => {
      const result = await service.findAll();
      
      expect(repository.find).toHaveBeenCalled();
      expect(result).toEqual([mockEmployee]);
    });

    it('should return empty array when no employees exist', async () => {
      jest.spyOn(repository, 'find').mockResolvedValueOnce([]);
      
      const result = await service.findAll();
      
      expect(result).toEqual([]);
    });
  });

  describe('findOne', () => {
    it('should find one employee by id', async () => {
      const id = 1;
      const result = await service.findOne(id);
      
      expect(repository.findOne).toHaveBeenCalledWith({ where: { id } });
      expect(result).toEqual(mockEmployee);
    });

    it('should return null if employee not found', async () => {
      jest.spyOn(repository, 'findOne').mockResolvedValueOnce(null);
      
      const result = await service.findOne(999);
      
      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update an employee', async () => {
      const id = 1;
      const dto: CreateEmployeeDto = {
        firstName: 'Updated',
        lastName: 'User',
        office: Office.TALLINN,
        phone: '+37120000000',
        tags: 'Senior Developer',
        birthDate: new Date('1990-01-01'),
      };

      await service.update(id, dto);
      
      expect(repository.update).toHaveBeenCalledWith(id, dto);
    });
  });

  describe('remove', () => {
    it('should remove an employee', async () => {
      const id = 1;
      await service.remove(id);
      
      expect(repository.delete).toHaveBeenCalledWith(id);
    });
  });
}); 