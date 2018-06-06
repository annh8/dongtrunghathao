import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/administrator/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'UI Features',
    icon: 'nb-keypad',
    link: '/administrator/pages/ui-features',
    children: [
      {
        title: 'Buttons',
        link: '/administrator/pages/ui-features/buttons',
      },
      {
        title: 'Grid',
        link: '/administrator/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/administrator/pages/ui-features/icons',
      },
      {
        title: 'Modals',
        link: '/administrator/pages/ui-features/modals',
      },
      {
        title: 'Popovers',
        link: '/administrator/pages/ui-features/popovers',
      },
      {
        title: 'Typography',
        link: '/administrator/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/administrator/pages/ui-features/search-fields',
      },
      {
        title: 'Tabs',
        link: '/administrator/pages/ui-features/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'nb-compose',
    children: [
      {
        title: 'Form Inputs',
        link: '/administrator/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/administrator/pages/forms/layouts',
      },
    ],
  },
  {
    title: 'Components',
    icon: 'nb-gear',
    children: [
      {
        title: 'Tree',
        link: '/administrator/pages/components/tree',
      }, {
        title: 'Notifications',
        link: '/administrator/pages/components/notifications',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'nb-location',
    children: [
      {
        title: 'Google Maps',
        link: '/administrator/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/administrator/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/administrator/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/administrator/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/administrator/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/administrator/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/administrator/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'nb-title',
    children: [
      {
        title: 'TinyMCE',
        link: '/administrator/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/administrator/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables',
    icon: 'nb-tables',
    children: [
      {
        title: 'Smart Table',
        link: '/administrator/pages/tables/smart-table',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'nb-shuffle',
    children: [
      {
        title: '404',
        link: '/administrator/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/administrator/auth/login',
      },
      {
        title: 'Register',
        link: '/administrator/auth/register',
      },
      {
        title: 'Request Password',
        link: '/administrator/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/administrator/auth/reset-password',
      },
    ],
  },
];
