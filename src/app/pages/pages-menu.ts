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
];
