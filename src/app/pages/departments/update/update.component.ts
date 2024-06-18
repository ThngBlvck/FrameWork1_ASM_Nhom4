import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
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
    private router: Router,
    private toastrService: NbToastrService) {

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
    if (this.editDepartment.valid) {
      this.DepartmentService.updateDepartment(this.id, this.editDepartment.value).subscribe((res) => {
          this.handleSaveSuccess(res);
        },
      );
    }
  }
  handleSaveSuccess(res: any) {
    this.toastrService.success('Cập nhật phòng ban thành công!', 'Thành công');
    this.router.navigate(['/pages/Departments/list']).then();
    console.log(res);
  }
}
