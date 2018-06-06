/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../@core/core.module';
import { ThemeModule } from '../@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin/admin.component';
import { AdministratorRoutingModule } from './administrator-routing.module';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { environment } from '../../environments/environment';
import { LogoutComponent } from './logout/logout.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { NewsComponent } from './news/news.component';
import { AddNewComponent } from './add-new/add-new.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ConfigComponent } from './config/config.component';
import { OrderComponent } from './order/order.component';
import { HttpModule } from '@angular/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';
import { FileSizePipe } from './uploads/file-size.pipe';
import { DropZoneDirective } from './uploads/drop-zone.directive';
import { ButtonViewComponent } from './button-view/button-view.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditNewsComponent } from './edit-news/edit-news.component';
//import { ConfigHomepageComponent } from './config-homepage/config-homepage.component';
import { ConfiSliderComponent } from './confi-slider/confi-slider.component';
import { ConfigYoutubeComponent } from './config-youtube/config-youtube.component';
import { PageConfigComponent } from './page-config/page-config.component';
import { ConfigFeelcustomerComponent } from './config-feelcustomer/config-feelcustomer.component';
import { ConfigPartnerComponent } from './config-partner/config-partner.component';
import { ConfigSupportComponent } from './config-support/config-support.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PageTuyendungComponent } from './page-tuyendung/page-tuyendung.component';
import { PageGioithieuComponent } from './page-gioithieu/page-gioithieu.component';
import { ImageManagerComponent } from './image-manager/image-manager.component';

@NgModule({
  declarations: [AdminComponent, AuthComponent, LogoutComponent, ProductComponent, CategoryComponent, NewsComponent, AddNewComponent, AddProductComponent, ConfigComponent, OrderComponent, UploadFormComponent, DropZoneDirective, FileSizePipe, ButtonViewComponent, EditProductComponent, EditNewsComponent, ConfiSliderComponent, ConfigYoutubeComponent, PageConfigComponent, ConfigFeelcustomerComponent, ConfigPartnerComponent, ConfigSupportComponent, PromotionComponent, PageTuyendungComponent, PageGioithieuComponent, ImageManagerComponent],
  imports: [
    HttpClientModule,
    AdministratorRoutingModule,
    HttpModule,
    Ng2SmartTableModule,
    
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  entryComponents: [
    ButtonViewComponent,
  ],
  bootstrap: [AdminComponent],
  providers: [AuthService, AuthGuardService, 
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})

export class AdministratorModule { }
