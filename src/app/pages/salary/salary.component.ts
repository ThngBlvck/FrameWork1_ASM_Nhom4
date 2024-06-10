import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Salary } from 'app/@core/interfaces/salary';
import { SalaryService } from 'app/@core/services/apis/salary.service';
import { Iemployee } from 'app/@core/interfaces/employee';
@Component({
  selector: 'app-salary',
  template: `<router-outlet></router-outlet>`,
})


export class SalaryComponent{





  constructor(
    ) {
    }


  ngOnInit(): void {
  }
}

