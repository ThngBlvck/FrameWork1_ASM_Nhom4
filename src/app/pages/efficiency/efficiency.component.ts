import {Component, OnInit} from '@angular/core';
import {Iefficiency} from "../../@core/interfaces/efficiency.interface";
import {EfficiencyService} from "../../@core/services/apis/efficiency.service";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

export interface Iemployee {
  id: number;
  name: string;
  address: string;
  position_id: number;
  department_id: number;
  created_at: string;
  updated_at: string;
}
@Component({
  selector: 'app-efficiency',
  templateUrl: './list.component.html',
  imports: [
    NgForOf,
    RouterLink
  ],
  standalone: true
})
export class EfficiencyComponent implements OnInit {
  listEfficiency: Iefficiency[] ;
  listEmployee: Iemployee[] ;
  combinedData: any[]

  constructor(
    // private fb: FormBuilder,
    private efficiencyService: EfficiencyService
  ) {}

  ngOnInit(): void{
    this.getEfficiency();
    this.getEmployee();
  }

  getEfficiency(): void {
    this.efficiencyService.getAllEfficiency().subscribe(
      res => {
        console.log(res);
        this.listEfficiency = res.data;
        this.combineData();
      }
    );
  }

  getEmployee(): void {
    this.efficiencyService.getAllEmployee().subscribe(
      res => {
        console.log(res);
        this.listEmployee = res.data;
        this.combineData();
      }
    )
  };
  combineData(): void {
    if (this.listEfficiency.length > 0 && this.listEmployee.length > 0) {
      this.combinedData = this.listEfficiency.map(efficiency => {
        return {
          ...efficiency,
          employeeName: this.listEmployee.find(cat => cat.id === efficiency.employee_id)?.name,
          employeeId: this.listEmployee.find(cat => cat.id === efficiency.employee_id)?.id
        };
      });
    }
  }

  getProgressText(progress: number): string {
    return progress === 1 ? 'Chưa đạt' : 'Đạt';
  }

  deleteEfficiency(id: number): void {
    if (confirm('Bạn có chắc chắn muốn xóa?')) {
      this.efficiencyService.deleteEfficiency(id).subscribe(
        res => {
          console.log('Deleted successfully');
          this.getEfficiency();  // Refresh the list after deletion
        },
        error => {
          console.error('Error deleting efficiency:', error);
        }
      );
    }
  }
}
