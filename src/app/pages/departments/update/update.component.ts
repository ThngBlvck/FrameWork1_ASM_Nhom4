import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentModel } from 'app/@core/interfaces/department.interface';
import { DepartmentService } from 'app/@core/services/apis/department.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit{
  editDepartment: FormGroup;
  DepartmentById: DepartmentModel;
  id = this.route.snapshot.params['id'];

  constructor(
    private DepartmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router ) {

  }

  ngOnInit(){
    this.editDepartment = new FormGroup({
      name: new FormControl('', Validators.required)
    });
    this.updateDepartment(this.id);
  }

  updateDepartment(id: number) {
    this.DepartmentService.getDepartmentById(id).subscribe(res => {
      this.DepartmentById = res.departments;
      console.log(res.departments)
      this.editDepartment.patchValue(this.DepartmentById);
    });
  }

  saveUpdateDepartment() {
    this.DepartmentService.updateDepartment(this.id, this.editDepartment.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/pages/Departments/list']);
    });
  }
}
