import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PositionService} from "../../../@core/services/apis/position.service";
import {PositionInfoModel} from "../position.component";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  dataP!: PositionInfoModel;

  constructor(
    private http: HttpClient,
    private position: PositionService,
    private route: ActivatedRoute,
    private router: Router

  ) {
  }
  ngOnInit(): void {
    this.getAllPosition();
  }
  listPosition: PositionInfoModel[] = [];
  getAllPosition(){
    this.position.getAllPositon().subscribe(res =>{
      this.dataP = res.data;
      console.log(this.dataP);
    })
  }
  deletePosition(id: PositionInfoModel){
    this.position.deletePositions(id).subscribe(res => {
      console.log(res);
      //this.router.navigate(['/pages','Position','list']);

    })
  }
}
