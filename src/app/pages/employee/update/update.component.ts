import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  departments: DepartmentModel[] = [];
  positions: PositionInfoModel[] = [];
  id = this.route.snapshot.params['id'];

  constructor(
    private EmployeeService: EmployeeService,
    private DepartmentService: DepartmentService,
    private PositionService: PositionService,
    private route: ActivatedRoute,
    private router: Router ) {

  }

  getAllDepartment(){
    this.DepartmentService.getAllDepartment().subscribe(res =>{
      this.departments = res.data;
      console.log(this.departments);
    })
  }

  getAllPosition(){
    this.PositionService.getAllPosition().subscribe(res =>{
      this.positions = res.data;
      console.log(this.positions);
    })
  }

  ngOnInit(){
    this.editEmployee = new FormGroup({
      name: new FormControl('',Validators.required),
      department_id: new FormControl('',Validators.required),
      position_id: new FormControl('',Validators.required),
    });
    this.updateEmployee(this.id);
  }

  updateEmployee(id: number) {
    this.EmployeeService.getEmployeeById(id).subscribe(res => {
      this.EmployeeById = res.employee;
      console.log(res.employee)
      this.editEmployee.patchValue(this.EmployeeById);
    });
  }

  saveUpdateEmployee() {
    this.EmployeeService.updateEmployee(this.id, this.editEmployee.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/pages/Employee/list']);
    });
  }
}
