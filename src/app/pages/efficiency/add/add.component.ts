import {Component, OnInit} from '@angular/core';
import {Iefficiency} from "../../../@core/interfaces/efficiency.interface";
import {Iemployee} from "../efficiency.component";
import {EfficiencyService} from "../../../@core/services/apis/efficiency.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{
  newEfficiency: Iefficiency = {
    id: null,
    employee_id: null,
    job: null,
    progress: 1,
    createdAt: '',
    updatedAt: ''
  };
  newEmployees: Iemployee[];

  constructor(
    private efficiencyService: EfficiencyService,
    private router: Router,
    private fb: FormBuilder,
) {}

  ngOnInit(): void {
    this.loadEmployees();
  }


  loadEmployees(): void {

    this.efficiencyService.getAllEmployee().subscribe(
      res => {
        this.newEmployees = res.data;
      }
    );
  }
  addEfficiency(): void {
    this.efficiencyService.postEfficiency(this.newEfficiency).subscribe(
      res => {
        console.log('Added successfully');
        this.router.navigate(['/pages/Efficiency']);
      }
    );
  }

}
