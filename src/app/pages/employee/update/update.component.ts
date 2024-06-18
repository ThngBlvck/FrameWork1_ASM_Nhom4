import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { DepartmentModel } from 'app/@core/interfaces/department.interface';
import { EmployeeModel } from 'app/@core/interfaces/employee.interface';
import { DepartmentService } from 'app/@core/services/apis/department.service';
import { EmployeeService } from 'app/@core/services/apis/employee.service';
import { PositionInfoModel, PositionService } from 'app/@core/services/apis/position.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit{
  editEmployee: FormGroup;
  EmployeeById: EmployeeModel;
  departments: DepartmentModel[];
  positions: PositionInfoModel[];
  id = this.route.snapshot.params['id'];

  constructor(
    private EmployeeService: EmployeeService,
    private DepartmentService: DepartmentService,
    private PositionService: PositionService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: NbToastrService ) {

  }





  ngOnInit(): void {
    this.editEmployee = new FormGroup({
      name: new FormControl('',Validators.required),
      department_id: new FormControl('',Validators.required),
      position_id: new FormControl('',Validators.required),
    });
    this.getAllPosition();
    this.getAllDepartment();
    this.updateEmployee(this.id);
  }
  getAllPosition(){
    this.PositionService.getAllPositon().subscribe(res =>{
      this.positions = res.data;
      console.log(this.positions);
    })
  }

  getAllDepartment(){
    this.DepartmentService.getAllDepartment().subscribe(res =>{
      this.departments = res.data;
      console.log(this.departments);
    })
  }

  updateEmployee(id: number) {
    this.EmployeeService.getEmployeeById(id).subscribe(res => {
      this.EmployeeById = res.employee;
      console.log(res.employee)
      this.editEmployee.patchValue(this.EmployeeById);
    });
  }


  saveUpdateEmployee() {
    if (this.editEmployee.valid) {
      this.EmployeeService.updateEmployee(this.id, this.editEmployee.value).subscribe((res) => {
          this.handleSaveSuccess(res);
        },
      );
    }
  }
  handleSaveSuccess(res: any) {
    this.toastrService.success('Cập nhật nhân viên thành công!', 'Thành công');
    this.router.navigate(['/pages/Employee/list']).then();
    console.log(res);
  }


}
