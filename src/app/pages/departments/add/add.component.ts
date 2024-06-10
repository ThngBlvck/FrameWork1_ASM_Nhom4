import { DepartmentService } from 'app/@core/services/apis/department.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{
  addForm!: FormGroup;
  constructor(
    private DepartmentService: DepartmentService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl(''),
    });
  }

  create() {
    this.DepartmentService.postDepartment(this.addForm.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/pages/Departments/list']);

    })
  }

}
