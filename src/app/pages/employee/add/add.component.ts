import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../../@core/services/apis/employee.service";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import { EmployeeModel } from 'app/@core/interfaces/employee.interface';
import { DepartmentModel } from 'app/@core/interfaces/department.interface';
import { DepartmentService } from 'app/@core/services/apis/department.service';
import {Router} from "@angular/router";
import { PositionInfoModel } from 'app/pages/position/position.component';
import { PositionService } from 'app/@core/services/apis/position.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{
  employees: EmployeeModel[];
  departments: DepartmentModel[];
  positions: PositionInfoModel[];
  combinedData: any[];
  constructor(
    private EmployeeService: EmployeeService,
    private DepartmentService: DepartmentService,
    private PositionService: PositionService,
    private router: Router,
    private toastrService: NbToastrService,
    // private PositionService: PositionService,
  ) {

  }

  getAllDepartment(){
    this.DepartmentService.getAllDepartment().subscribe(res =>{
      this.departments = res.data;
      console.log(this.departments);
    })
  }

  getAllPositon(){
    this.PositionService.getAllPositon().subscribe(res =>{
      this.positions = res.data;
      console.log(this.positions);
    })
  }

  addForm!: FormGroup;

  ngOnInit(): void {
    this.getAllDepartment();
    this.getAllPositon();
    this.addForm = new FormGroup({
      name: new FormControl('',Validators.required),
      department_id: new FormControl('',Validators.required),
      position_id: new FormControl('',Validators.required)
    });

  }

  // create() {
  //   this.EmployeeService.postEmployee(this.addForm.value).subscribe(res => {
  //     console.log(res);
  //     this.router.navigate(['/pages/Employee/list']);

  //   })
  // }

  create() {
    if (this.addForm.valid) {
      this.EmployeeService.postEmployee(this.addForm.value).pipe().subscribe({
        next: this.handleLoginSuccess.bind(this),
        error: this.handleError.bind(this),
      });
    }
  }
  protected handleLoginSuccess(res: any) {
    this.toastrService.show(
      'Thêm nhân viên thành công!',
      'Thành công',
      { status: 'success' }
    );
    this.router.navigate(['/pages/Employee/list']).then();
    console.log(res);
  }

  protected handleError(error: any) {
    this.toastrService.show(
      'Thêm nhân viên thất bại. Vui lòng thử lại sau.',
      'Lỗi',
      { status: 'danger' }
    );
    console.error('Error adding positon:', error);
  }
}
