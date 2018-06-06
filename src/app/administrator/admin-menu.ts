import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  // {
  //   title: 'Dashboard',
  //   icon: 'nb-home',
  //   link: '/administrator/pages/dashboard',
  //   home: true,
  // },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Danh mục sản phẩm',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Danh mục',
        link: '/administrator/category',
      }
    ],
  },
  {
    title: 'Sản phẩm',
    icon: 'nb-keypad',
    link: '/administrator/products',
    children: [
      {
        title: 'Thêm mới sản phẩm',
        link: '/administrator/add-product',
      },
      {
        title: 'Danh sách sản phẩm',
        link: '/administrator/products',
      }
    ],
  },
  {
    title: 'Tin tức',
    icon: 'nb-compose',
    children: [
      {
        title: 'Thêm mới tin tức',
        link: '/administrator/add-new',
      },
      {
        title: 'Danh sách tin bài',
        link: '/administrator/news',
      },
      {
        title: 'Trang tuyển dụng',
        link: '/administrator/tuyendung',
      },
      {
        title: 'Trang giới thiệu',
        link: '/administrator/gioithieu',
      },
    ],
  },
  {
    title: 'Giỏ hàng',
    icon: 'nb-gear',
    children: [
      {
        title: 'Đơn hàng',
        link: '/administrator/order',
      },
    ],
  },
  {
    title: 'Cấu hình',
    icon: 'nb-gear',
    children: [
      {
        title: 'Cấu hình thông tin chung',
        link: '/administrator/config',
      },
      {
        title: 'Cấu hình trang chủ',
        link: '/administrator/pageconfig',
      },
      {
        title: 'Slider',
        link: '/administrator/config-slider',
      },
      {
        title: 'Youtube',
        link: '/administrator/config-youtube',
      },
      {
        title: 'Đối tác',
        link: '/administrator/config-partner',
      },
      {
        title: 'Cảm nhận khách hàng',
        link: '/administrator/config-feelcustomer',
      },
      {
        title: 'Khuyến mãi',
        link: '/administrator/config-promotion',
      },
      {
        title: 'Tư vấn',
        link: '/administrator/advisory',
      },
      {
        title: 'Quản lí ảnh',
        link: '/administrator/images-manager',
      }
    ],
  },
  
  
];
