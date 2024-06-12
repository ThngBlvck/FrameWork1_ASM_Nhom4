import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SalaryService } from '../../../@core/services/apis/salary.service';
import { Iemployee } from '../../../@core/interfaces/employee';
import { Salary } from '../../../@core/interfaces/salary';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  employees: Iemployee[] = [];
  salaryId: number;
  loading = false;
  salary : Salary;
  constructor(
    private fb: FormBuilder,
    private salaryService: SalaryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.editForm = this.fb.group({
      employee_id: ['', Validators.required],
      salarycong: ['', Validators.required],
      salarytru: ['', Validators.required],
      salary: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.salaryService.getAllSalary().subscribe(
      res => {
        this.salary = res.data.find(salarry => salarry.id === id);
      }
    );
  }

  updateSalary(): void {
    this.salaryService.updateSalary(this.salary.id, this.salary).subscribe(
      res => {
        console.log('Updated successfully');
        this.router.navigate(['/pages/Salary/list']);
      }
    );
  }

}
