import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Iemployee} from "../../../@core/interfaces/employee";
import {CTions} from "../../../@core/interfaces/communications";
import {SalaryService} from "../../../@core/services/apis/salary.service";
import {CommunicationsService} from "../../../@core/services/apis/communications.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  editForm: FormGroup;
  employees: Iemployee[] = [];
  ction : CTions
  constructor(
    private fb: FormBuilder,
    private communicationsService: CommunicationsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.editForm = this.fb.group({
      employee_id: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(10)]],
      address: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.communicationsService.getAllCommunications().subscribe(
      res => {
        this.ction = res.data.find(ction => ction.id === id);
      }
    );
  }

  updateCommunications(): void {
    this.communicationsService.updateCommunications(this.ction.id, this.ction).subscribe(
      res => {
        console.log('Updated successfully');
        this.router.navigate(['pages/Communications/list']);
      }
    );
  }
}

