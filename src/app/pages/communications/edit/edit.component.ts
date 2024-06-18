import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Iemployee} from "../../../@core/interfaces/employee";
import {CTions} from "../../../@core/interfaces/communications";
import {SalaryService} from "../../../@core/services/apis/salary.service";
import {CommunicationsService} from "../../../@core/services/apis/communications.service";
import {NbToastrService} from "@nebular/theme";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  employees: Iemployee[] = [];
  ction : CTions
  constructor(
    private fb: FormBuilder,
    private communicationsService: CommunicationsService,
    private router: Router,
    private route: ActivatedRoute,
    private toastrService: NbToastrService // Inject NbToastrService
  ) {
    this.editForm = this.fb.group({
      employee_id: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.communicationsService.getAllCommunications().subscribe(
      res => {
        this.ction = res.data.find(ction => ction.id === id);
        // Update form values after fetching the communication
        this.editForm.patchValue(this.ction);
      }
    );
  }

  updateCommunications(): void {
    if (this.editForm.valid) {
      this.communicationsService.updateCommunications(this.ction.id, this.editForm.value).subscribe(
        res => {
          console.log('Updated successfully');
          this.toastrService.success('Cập nhật thành công!', 'Thông báo');
          this.router.navigate(['pages/Communications/list']);
        },
        err => {
          console.error('Error updating communications:', err);
          this.toastrService.danger('Có lỗi xảy ra!', 'Thông báo');
        }
      );
    } else {
      this.toastrService.warning('Form không hợp lệ!', 'Thông báo');
    }
  }
}

