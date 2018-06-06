import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigInfo } from '../../objectClass/configInfo';
import { OrderPipe } from 'ngx-order-pipe';
import { AdminService } from '../../administrator/admin.service';
import { ISubscription } from 'rxjs/Subscription';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {
  menu = [
    {
      title: 'Trang chủ',
      path: '/',
    },
    {
      title: 'Sản phẩm',
      path: '/san-pham',
      child: []

    },
    {
      title: 'Tin tức',
      path: '/tin-tuc',

    },
    {
      title: 'Tuyển dụng',
      path: '/tuyen-dung',

    },
    {
      title: 'Giới thiệu',
      path: '/gioi-thieu',

    },
    {
      title: 'Liên hệ',
      path: '/lien-he',

    },
    {
      title: 'Ảnh',
      path: '/anh',

    }
  ];
  menuMobile = [
    {
      title: 'Sản phẩm',
      path: '/san-pham',
    },

  ]
  config: ConfigInfo;
  subscriptionConfig: ISubscription;
  subscriptionMenu: ISubscription;
  constructor(private router: Router,
     private service: AdminService,
      private orderPipe: OrderPipe,
      private titleService: Title
    ) {
      this.titleService.setTitle('Đông trùng hạ thảo tam đảo');
    this.subscriptionMenu = this.service.getAllCategory().subscribe(response => {
      this.menu[1].child = response;
      response.forEach(element => {
        this.menuMobile.push({
          title: element.name,
          path: element.link
        });


      });
      this.menuMobile.push({
        title: 'Tin tức',
        path: '/tin-tuc',

      },
        {
          title: 'Tuyển dụng',
          path: '/tuyen-dung',

        },
        {
          title: 'Giới thiệu',
          path: '/gioi-thieu',

        },
        {
          title: 'Liên hệ',
          path: '/lien-he',
        });
    });
  }
  ngOnInit() {
    this.config = new ConfigInfo();
    this.subscriptionConfig = this.service.getConfig().subscribe(response => {
      this.config = response;
    });
  }
  ngOnDestroy() {
    this.subscriptionConfig.unsubscribe();
    this.subscriptionMenu.unsubscribe();
  }
  ngAfterViewInit() {
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/58fe10a04ac4446b24a6bc41/default';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }
}
