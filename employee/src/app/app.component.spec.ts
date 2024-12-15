import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { CoreService } from './core/core.service';
import { EmployeeService } from './services/employee.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockDialog: jasmine.SpyObj<MatDialog>;
  let mockEmployeeService: jasmine.SpyObj<EmployeeService>;
  let mockCoreService: jasmine.SpyObj<CoreService>;

  beforeEach(async () => {
    mockDialog = jasmine.createSpyObj('MatDialog', ['open']);
    mockEmployeeService = jasmine.createSpyObj('EmployeeService', ['getEmployeeList', 'deleteEmployee']);
    mockCoreService = jasmine.createSpyObj('CoreService', ['openSnackBar']);

    mockEmployeeService.getEmployeeList.and.returnValue(of([]));
    mockDialog.open.and.returnValue({ afterClosed: () => of(true) } as any);

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        BrowserAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule
      ],
      providers: [
        { provide: MatDialog, useValue: mockDialog },
        { provide: EmployeeService, useValue: mockEmployeeService },
        { provide: CoreService, useValue: mockCoreService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should load employee list on init', () => {
    component.ngOnInit();
    expect(mockEmployeeService.getEmployeeList).toHaveBeenCalled();
  });

  it('should open add employee dialog', () => {
    component.openAddEditEmpForm();
    expect(mockDialog.open).toHaveBeenCalled();
  });

  it('should delete employee and refresh list', () => {
    mockEmployeeService.deleteEmployee.and.returnValue(of({}));
    component.deleteEmployee(1);
    expect(mockEmployeeService.deleteEmployee).toHaveBeenCalledWith(1);
    expect(mockCoreService.openSnackBar).toHaveBeenCalled();
    expect(mockEmployeeService.getEmployeeList).toHaveBeenCalled();
  });
});
