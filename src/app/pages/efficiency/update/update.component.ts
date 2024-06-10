import {Component, OnInit} from '@angular/core';
import {Iefficiency} from "../../../@core/interfaces/efficiency.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {EfficiencyService} from "../../../@core/services/apis/efficiency.service";
import {Iemployee} from "../efficiency.component";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  efficiency: Iefficiency;
  employeeName: string;

  constructor(
    private route: ActivatedRoute,
    private efficiencyService: EfficiencyService,
    private router: Router
  ) {}

  ngOnInit(): void{

    const id = +this.route.snapshot.paramMap.get('id');
    this.efficiencyService.getAllEfficiency().subscribe(
      res => {
        this.efficiency = res.data.find(eff => eff.id === id);
        this.getEmployeeName(this.efficiency.employee_id);
      }
    );
  }
  getEmployeeName(employeeId: any): void {
    this.efficiencyService.getAllEmployee().subscribe(
      (res: any) => {
        const employee = res.data.find((emp: any) => emp.id === employeeId);
        if (employee) {
          this.employeeName = employee.name;
        } else {
          this.employeeName = "Không tìm thấy nhân viên";
        }
      },
      (error: any) => {
        console.error("Lỗi khi lấy dữ liệu nhân viên:", error);
        this.employeeName = "Lỗi khi lấy dữ liệu nhân viên";
      }
    );
  }


  updateEfficiency(): void {
    this.efficiencyService.updateEfficiency(this.efficiency.id, this.efficiency).subscribe(
      res => {
        console.log('Updated successfully');
        this.router.navigate(['/pages/Efficiency']);
      }
    );
  }
}
