import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import 'reflect-metadata';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { Office } from './enums/office.enum';

describe('EmployeesController', () => {
  let controller: EmployeesController;
  let service: EmployeesService;

  const mockEmployee = {
    id: 1,
    firstName: 'Test',
    lastName: 'User',
    office: Office.RIGA,
    phone: '+37120000000',
    tags: 'Developer',
    birthDate: new Date('1990-01-01'),
  };

  const mockEmployeesService = {
    create: jest.fn().mockResolvedValue(mockEmployee),
    findAll: jest.fn().mockResolvedValue([mockEmployee]),
    findOne: jest.fn().mockResolvedValue(mockEmployee),
    update: jest.fn().mockResolvedValue(mockEmployee),
    remove: jest.fn().mockResolvedValue(undefined),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeesController],
      providers: [
        {
          provide: EmployeesService,
          useValue: mockEmployeesService,
        },
      ],
    }).compile();

    controller = module.get<EmployeesController>(EmployeesController);
    service = module.get<EmployeesService>(EmployeesService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    const createDto: CreateEmployeeDto = {
      firstName: 'Test',
      lastName: 'User',
      office: Office.RIGA,
      phone: '+37120000000',
      tags: 'Developer',
      birthDate: new Date('1990-01-01'),
    };

    it('should create an employee', async () => {
      const result = await controller.create(createDto);
      expect(service.create).toHaveBeenCalledWith(createDto);
      expect(result).toEqual(mockEmployee);
    });

    it('should handle creation errors', async () => {
      jest.spyOn(service, 'create').mockRejectedValueOnce(new Error('Creation failed'));
      await expect(controller.create(createDto)).rejects.toThrow('Creation failed');
    });
  });

  describe('findAll', () => {
    it('should return an array of employees', async () => {
      const result = await controller.findAll();
      expect(service.findAll).toHaveBeenCalled();
      expect(result).toEqual([mockEmployee]);
    });

    it('should return empty array when no employees exist', async () => {
      jest.spyOn(service, 'findAll').mockResolvedValueOnce([]);
      const result = await controller.findAll();
      expect(result).toEqual([]);
    });
  });

  describe('findOne', () => {
    it('should return a single employee', async () => {
      const result = await controller.findOne('1');
      expect(service.findOne).toHaveBeenCalledWith(1);
      expect(result).toEqual(mockEmployee);
    });

    it('should throw NotFoundException when employee not found', async () => {
      jest.spyOn(service, 'findOne').mockResolvedValueOnce(null);
      await expect(controller.findOne('1')).rejects.toThrow(NotFoundException);
    });

    it('should handle invalid id format', async () => {
      await expect(controller.findOne('invalid')).rejects.toThrow();
    });
  });

  describe('update', () => {
    const updateDto: CreateEmployeeDto = {
      firstName: 'Updated',
      lastName: 'User',
      office: Office.TALLINN,
      phone: '+37120000000',
      tags: 'Senior Developer',
      birthDate: new Date('1990-01-01'),
    };

    it('should update an employee', async () => {
      const result = await controller.update('1', updateDto);
      expect(service.update).toHaveBeenCalledWith(1, updateDto);
      expect(result).toEqual(mockEmployee);
    });

    it('should handle update errors', async () => {
      jest.spyOn(service, 'update').mockRejectedValueOnce(new Error('Update failed'));
      await expect(controller.update('1', updateDto)).rejects.toThrow('Update failed');
    });
  });

  describe('remove', () => {
    it('should remove an employee', async () => {
      await controller.remove('1');
      expect(service.remove).toHaveBeenCalledWith(1);
    });

    it('should handle removal errors', async () => {
      jest.spyOn(service, 'remove').mockRejectedValueOnce(new Error('Removal failed'));
      await expect(controller.remove('1')).rejects.toThrow('Removal failed');
    });
  });
}); 