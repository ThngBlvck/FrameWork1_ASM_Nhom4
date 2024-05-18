import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  employees: Employee[] = [
    { 
      id: 1,
      fullName: "Nguyễn Văn A",
      email: "nguyenvana@example.com",
      phoneNumber: "0123456789",
      temporaryAddress: "789 Đường DEF, Quận UVW, Thành phố HCM",
      permanentAddress: "123 Đường ABC, Quận XYZ, Thành phố HCM"
    },
    {
      id: 2,
      fullName: "Trần Thị B",
      email: "tranthib@example.com",
      phoneNumber: "0987654321",
      permanentAddress: "456 Đường XYZ, Quận ABC, Thành phố HCM",
      temporaryAddress: "789 Đường DEF, Quận UVW, Thành phố HCM"
    },
   
  ];

  constructor(private router: Router) {}
  editEmployee(employeeId: number) {
    this.router.navigate(['/edit', employeeId]);
  }
}
interface Employee {
  id:number;
  fullName: string;
  email: string;
  phoneNumber: string;
  permanentAddress: string;
  temporaryAddress?: string; 
}