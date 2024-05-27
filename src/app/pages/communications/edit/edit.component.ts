import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  [x: string]: any;
  employees: Employee[] = [
    {
      id: 1,
      fullName: "Nguyễn Văn A",
      email: "nguyenvana@example.com",
      phoneNumber: "0123456789",
      permanentAddress: "123 Đường ABC, Quận XYZ, Thành phố HCM"
    },
    {
      id: 2,
      fullName: "Trần Thị B",
      email: "tranthib@example.com",
      phoneNumber: "0987654321",
      permanentAddress: "456 Đường XYZ, Quận ABC, Thành phố HCM",
      temporaryAddress: "789 Đường DEF, Quận UVW, Thành phố HCM"
    }
  ];

  isNew: boolean = true;
  employee: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        // Nếu có ID được truyền qua tham số, là chế độ chỉnh sửa
        this.isNew = false;
        // Tải thông tin nhân viên từ service hoặc bất kỳ nguồn dữ liệu nào khác dựa trên ID
        const employeeId = +params['id']; // Chuyển đổi id từ string sang number
        // Giả sử bạn có một service tải thông tin nhân viên từ server
        // this.employee = this.employeeService.getEmployeeById(employeeId);
        // Trong trường hợp này, dữ liệu được giả định từ một nguồn dữ liệu giả định:
        this.employee = this.getEmployeeByIdFromMockData(employeeId);
      }
    });
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
