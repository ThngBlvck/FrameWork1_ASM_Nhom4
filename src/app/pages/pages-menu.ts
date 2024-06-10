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
      }

    ],
  },
  {
    title: 'Thông tin nhân viên',
    icon: 'person-outline',
    children: [
      {
        title: 'Danh sách thông tin nhân viên',
        link: '/pages/Communications/list',
      }, {
        title: 'Thêm thông tin nhân viên',
        link: '/pages/Communications/add',
      },

    ],
  },
  {
    title: 'Lịch nghĩ',
    icon: 'calendar',
    children: [
      {
        title: 'Thêm',
        link: '/pages/Dayoff/add',
      },
      {
        title: 'Danh sách',
        link: '/pages/Dayoff/list',
      }
    ]
  },
  {
    title: 'Chức vụ',
    icon: 'briefcase',
    children: [
      {
        title: 'Thêm',
        link: '/pages/Position/add',
      },
      {
        title: 'Danh sách',
        link: '/pages/Position/list',
      },

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
      }

    ]
  },
  {
    title: 'Đánh Giá Hiệu Suất',
    icon: 'person-outline',
    children: [
      {
        title: 'Danh Sách',
        link: '/pages/Efficiency/',
      }
    ]
  },
  {
    title: 'Báo Cáo Nhân Sự',
    icon: 'person-outline',
    link: '/pages/HPreports',
  }
];
