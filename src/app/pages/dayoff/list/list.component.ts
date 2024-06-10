import {Component, OnInit} from '@angular/core';
import {DayoffInfoModel} from "../dayoff.component";
import {DayoffService} from "../../../@core/services/apis/Dayoff.service";
import { Router} from "@angular/router";
import {PositionInfoModel} from "../../position/position.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  dataD: any;

  constructor(
    private dayoff: DayoffService,
    private router: Router
  ) {
  }
  ngOnInit() {
    this.getAll()
  }
  getAll(){
    this.dayoff.getAllDayoffs().subscribe(res =>{
      this.dataD = res.data;
      console.log(res.data);
    })
  }
  deleteDayoff(id: DayoffInfoModel){
    this.dayoff.deleteDayoff(id).subscribe(res => {
      console.log(res);
      this.router.navigate(['/pages/Dayoff/list']);
    })
  }
}
