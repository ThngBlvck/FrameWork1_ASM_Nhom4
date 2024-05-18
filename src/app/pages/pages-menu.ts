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
    title: 'Salary',
    icon: 'person-outline',
    children: [
      {
        title: 'Creat',
        link: '/pages/Salary/add',
      },
      
    ]
  },
  {
    title: 'Communications',
    icon: 'person-outline',
    children: [
      {
        title: 'Creat',
        link: '/pages/Communications/add',
      },
      
    ]
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
  }
];
