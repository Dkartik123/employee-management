import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoreService } from './core.service';

describe('CoreService', () => {
  let service: CoreService;
  let mockSnackBar: jasmine.SpyObj<MatSnackBar>;

  beforeEach(() => {
    mockSnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);

    TestBed.configureTestingModule({
      providers: [
        CoreService,
        { provide: MatSnackBar, useValue: mockSnackBar }
      ]
    });
    service = TestBed.inject(CoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open snackbar with default action', () => {
    service.openSnackBar('Test message');
    expect(mockSnackBar.open).toHaveBeenCalledWith('Test message', 'ok', {
      duration: 3000,
      verticalPosition: 'bottom'
    });
  });

  it('should open snackbar with custom action', () => {
    service.openSnackBar('Test message', 'custom');
    expect(mockSnackBar.open).toHaveBeenCalledWith('Test message', 'custom', {
      duration: 3000,
      verticalPosition: 'bottom'
    });
  });
});
