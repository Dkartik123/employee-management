import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit {
  empForm: FormGroup;
  offices = ['Riga', 'Tallinn', 'Vilnius'];

  constructor(
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _dialogRef: MatDialogRef<EmpAddEditComponent>,
    private _coreService: CoreService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.empForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      office: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9\s-]{8,}$/)]],
      tags: [''],
      birthDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data)
  }

  onFormSubmit() {

    if (this.empForm.valid) {

      if (this.data) {
        this._empService.updateEmployee(this.data.id, this.empForm.value).subscribe({
          next: (val: any) => {
            // console.log("Employee Data Updated Successfully")
            this._coreService.openSnackBar("Employee Data Updated Successfully")
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        })
        console.log(this.empForm.value);
      } else {
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            // console.log("Employee Data Created Successfully")
            this._coreService.openSnackBar("Employee Data Created Successfully")
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        })
        console.log(this.empForm.value);
      }
    }
  }

}
