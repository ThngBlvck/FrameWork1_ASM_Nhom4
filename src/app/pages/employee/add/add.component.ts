import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../../@core/services/apis/employee.service";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import { EmployeeModel } from 'app/@core/interfaces/employee.interface';
import { DepartmentModel } from 'app/@core/interfaces/department.interface';
import { DepartmentService } from 'app/@core/services/apis/department.service';
import {Router} from "@angular/router";
import { PositionInfoModel } from 'app/pages/position/position.component';
import { PositionService } from 'app/@core/services/apis/position.service';

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
      name: new FormControl(''),
      department_id: new FormControl(''),
      position_id: new FormControl('')
    });

  }

  create() {
    this.EmployeeService.postEmployee(this.addForm.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/pages/Employee/list']);
  
    })
  }
}
