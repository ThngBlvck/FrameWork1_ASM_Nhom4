import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DayoffInfoModel} from "../dayoff.component";
import {DayoffService} from "../../../@core/services/apis/Dayoff.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent  implements OnInit{
  updateDayoff: FormGroup;
  ListById: DayoffInfoModel;
  id = this.route.snapshot.params['id'];

  constructor(
    private dayoff: DayoffService,
    private route: ActivatedRoute,
    private router: Router ) {

  }
  ngOnInit(){
    this.updateDayoff = new FormGroup({
      name: new FormControl('',Validators.required),
      reason: new FormControl('',Validators.required),
      dayoff: new FormControl('',Validators.required)
    });
    this.editDayoff(this.id);
  }

  editDayoff(id: number) {
    this.dayoff.getDayoffByid(id).subscribe(res => {
      this.ListById = res.dayoff;
      console.log(res.dayoff)
      this.updateDayoff.patchValue(this.ListById);
    });
  }
  saveEditDayoff() {
    this.dayoff.updateDayoffs(this.id, this.updateDayoff.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/pages/Dayoff/list']);
    });
  }
}
