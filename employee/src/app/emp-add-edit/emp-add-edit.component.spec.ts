import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { CoreService } from '../core/core.service';
import { EmployeeService } from '../services/employee.service';
import { EmpAddEditComponent } from './emp-add-edit.component';

describe('EmpAddEditComponent', () => {
  let component: EmpAddEditComponent;
  let fixture: ComponentFixture<EmpAddEditComponent>;
  let mockEmployeeService: jasmine.SpyObj<EmployeeService>;
  let mockCoreService: jasmine.SpyObj<CoreService>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<EmpAddEditComponent>>;

  beforeEach(async () => {
    mockEmployeeService = jasmine.createSpyObj('EmployeeService', ['addEmployee', 'updateEmployee']);
    mockCoreService = jasmine.createSpyObj('CoreService', ['openSnackBar']);
    mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      declarations: [EmpAddEditComponent],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        BrowserAnimationsModule,
        MatDialogModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: null },
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: EmployeeService, useValue: mockEmployeeService },
        { provide: CoreService, useValue: mockCoreService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty values', () => {
    expect(component.empForm.get('firstName')?.value).toBe('');
    expect(component.empForm.get('lastName')?.value).toBe('');
    expect(component.empForm.get('office')?.value).toBe('');
  });

  it('should add new employee when form is submitted', () => {
    mockEmployeeService.addEmployee.and.returnValue(of({}));
    
    component.empForm.patchValue({
      firstName: 'John',
      lastName: 'Doe',
      office: 'IT',
      phone: '1234567890',
      tags: 'developer',
      birthDate: new Date()
    });

    component.onFormSubmit();

    expect(mockEmployeeService.addEmployee).toHaveBeenCalled();
    expect(mockCoreService.openSnackBar).toHaveBeenCalledWith('Employee Data Created Successfully');
    expect(mockDialogRef.close).toHaveBeenCalledWith(true);
  });
});
