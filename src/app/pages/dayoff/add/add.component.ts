import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
// import {PositionService} from "../../../@core/services/apis/position.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DayoffService} from "../../../@core/services/apis/Dayoff.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent  implements OnInit{
  addForm: FormGroup;
  constructor(
    private dayoffService: DayoffService,
    private route: ActivatedRoute,
    private router: Router) {
  }
  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl(''),
      reason: new FormControl(''),
      dayoff: new FormControl('')

    });
  }
  create() {
    this.dayoffService.addDayoff(this.addForm.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/pages/Dayoff/list']);
    });
  }
}
