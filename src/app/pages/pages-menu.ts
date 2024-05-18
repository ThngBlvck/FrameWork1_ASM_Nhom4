import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    group: true,
  },
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'Lương nhân viên',
    icon: 'person-outline',
    children: [
      {
        title: 'Danh sách lương nhân viên',
        link: '/pages/Salary/list',
      },
      {
        title: 'Thêm Lương nhân viên',
        link: '/pages/Salary/add',
      },
      {
        title: 'Sửa Lương nhân viên',
        link: '/pages/Salary/edit',
      },

    ],
  },
  {
    title: 'Thông tin nhân viên',
    icon: 'person-outline',
    children: [
      {
        title: 'Danh sách thông tin nhân viên',
        link: '/pages/Communications/list',
      },
      {
        title: 'Sửa thông tin nhân viên',
        link: '/pages/Communications/edit',
      }, {
        title: 'Thêm thông tin nhân viên',
        link: '/pages/Communications/add',
      },

    ],
  },
  {
    title: 'Lịch nghĩ',
    icon: 'person-outline',
    children: [
      {
        title: 'Thêm',
        link: '/pages/Dayoff/add',
      },
      {
        title: 'Danh sách',
        link: '/pages/Dayoff/list',
      },
      {
        title: 'Sửa',
        link: '/pages/Dayoff/update',
      }

    ]
  },
  {
    title: 'Chức vụ',
    icon: 'person-outline',
    children: [
      {
        title: 'Thêm',
        link: '/pages/Position/add',
      },
      {
        title: 'Danh sách',
        link: '/pages/Position/list',
      },
      {
        title: 'Sửa',
        link: '/pages/Position/update',
      }

    ]
  },
  {
    title: 'Nhân viên',
    icon: 'person-outline',
    children: [
      {
        title: 'Thêm',
        link: '/pages/Employee/add',
      },
      {
        title: 'Danh sách',
        link: '/pages/Employee/list',
      },
      {
        title: 'Sửa',
        link: '/pages/Employee/update',
      }

    ]
  },
  {
    title: 'Phòng ban',
    icon: 'person-outline',
    children: [
      {
        title: 'Thêm',
        link: '/pages/Departments/add',
      },
      {
        title: 'Danh sách',
        link: '/pages/Departments/list',
      },
      {
        title: 'Sửa',
        link: '/pages/Departments/update',
      }

    ]
  },
  {
    title: 'Đánh Giá Hiệu Suất',
    icon: 'person-outline',
    children: [
      {
        title: 'Danh Sách',
        link: '/pages/Efficiency/list',
      }
    ]
  },
  {
    title: 'Báo Cáo Nhân Sự',
    icon: 'person-outline',
    link: '/pages/HPreports/list',
  }
];
