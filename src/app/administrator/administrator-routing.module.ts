import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
  NbAuthService,
} from '@nebular/auth';
import { AuthGuardService } from './auth-guard.service';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NewsComponent } from './news/news.component';
import { AddNewComponent } from './add-new/add-new.component';
import { CategoryComponent } from './category/category.component';
import { ConfigComponent } from './config/config.component';
import { OrderComponent } from './order/order.component';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditNewsComponent } from './edit-news/edit-news.component';
import { ConfiSliderComponent } from './confi-slider/confi-slider.component';
import { NotFoundComponent } from '../pages/miscellaneous/not-found/not-found.component';
import { PageConfigComponent } from './page-config/page-config.component';
import { ConfigYoutubeComponent } from './config-youtube/config-youtube.component';
import { ConfigSupportComponent } from './config-support/config-support.component';
import { ConfigPartnerComponent } from './config-partner/config-partner.component';
import { ConfigFeelcustomerComponent } from './config-feelcustomer/config-feelcustomer.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PageTuyendungComponent } from './page-tuyendung/page-tuyendung.component';
import { PageGioithieuComponent } from './page-gioithieu/page-gioithieu.component';
import { ImageManagerComponent } from './image-manager/image-manager.component';

const routes: Routes = [
  
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: AuthComponent,
      },
      {
        path: 'login',
        component: AuthComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
    ],
  },
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'products',
        component: ProductComponent,
      },
      {
        path: 'add-product',
        component: AddProductComponent,
      },
      {
        path: 'news',
        component: NewsComponent,
      },
      {
        path: 'add-new',
        component: AddNewComponent,
      },
      {
        path: 'category',
        component: CategoryComponent,
      },
      {
        path: 'config',
        component: ConfigComponent,
      },
      {
        path: 'pageconfig',
        component: PageConfigComponent,
      },
      {
        path: 'tuyendung',
        component: PageTuyendungComponent,
      },
      {
        path: 'gioithieu',
        component: PageGioithieuComponent,
      },
      {
        path: 'config-slider',
        component: ConfiSliderComponent,
      },
      {
        path: 'config-youtube',
        component: ConfigYoutubeComponent,
      },
      {
        path: 'advisory',
        component: ConfigSupportComponent,
      },
      {
        path: 'images-manager',
        component: ImageManagerComponent,
      },
     
      {
        path: 'config-partner',
        component: ConfigPartnerComponent,
      },
      {
        path: 'config-feelcustomer',
        component: ConfigFeelcustomerComponent,
      },
      {
        path: 'config-promotion',
        component: PromotionComponent,
      },
      {
        path: 'order',
        component: OrderComponent,
      },
      {
        path: 'upload',
        component: UploadFormComponent,
      },
      {
        path: 'edit-product/:id', 
        component: EditProductComponent
      },
      {
        path: 'edit-news/:id', 
        component: EditNewsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministratorRoutingModule { }
