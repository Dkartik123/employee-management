import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../environments/environment';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService]
    });
    service = TestBed.inject(EmployeeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get employee list', () => {
    const mockEmployees = [
      { id: 1, firstName: 'John', lastName: 'Doe' },
      { id: 2, firstName: 'Jane', lastName: 'Smith' }
    ];

    service.getEmployeeList().subscribe(employees => {
      expect(employees).toEqual(mockEmployees);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/employees`);
    expect(req.request.method).toBe('GET');
    req.flush(mockEmployees);
  });

  it('should add employee', () => {
    const mockEmployee = { firstName: 'John', lastName: 'Doe' };

    service.addEmployee(mockEmployee).subscribe(response => {
      expect(response).toEqual(mockEmployee);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/employees`);
    expect(req.request.method).toBe('POST');
    req.flush(mockEmployee);
  });

  it('should delete employee', () => {
    const id = 1;

    service.deleteEmployee(id).subscribe();

    const req = httpMock.expectOne(`${environment.apiUrl}/employees/${id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
