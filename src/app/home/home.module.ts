import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SliderComponent } from './slider/slider.component';
import { CarouselModule } from 'ngx-bootstrap';
import { InfoComponent } from './info/info.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TopproductComponent } from './topproduct/topproduct.component';
import { TopnewsComponent } from './topnews/topnews.component';
import { PartnerComponent } from './partner/partner.component';
import { FooterComponent } from './footer/footer.component';
import { FeelcustomerComponent } from './feelcustomer/feelcustomer.component';
import { ConsultComponent } from './consult/consult.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { TuyendungComponent } from './tuyendung/tuyendung.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { SanPhamComponent } from './san-pham/san-pham.component';
import { HomeServiceService } from './home-service.service';
import { SafeHtmlPipe } from '../safe-html.pipe';
import { SafeLinkPipe } from '../safe-link.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DetailComponent } from './detail/detail.component';
import { NewDetailComponent } from './new-detail/new-detail.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShippingComponent } from './shipping/shipping.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SearchComponent } from './search/search.component';
import { ImagesContentComponent } from './images-content/images-content.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule.forRoot(),
    FormsModule,
    HttpModule,
    HttpClientModule,
    
  ],
  providers:[HomeServiceService],
  declarations: [HeaderComponent, HomePageComponent, SliderComponent, InfoComponent, TrangchuComponent, TopproductComponent, TopnewsComponent, PartnerComponent, FooterComponent, FeelcustomerComponent, ConsultComponent, TintucComponent, TuyendungComponent, GioithieuComponent, LienheComponent, SanPhamComponent,SafeHtmlPipe,SafeLinkPipe, ProductDetailComponent, DetailComponent, NewDetailComponent, CategoryDetailComponent, CartComponent, ShippingComponent, SearchComponent, ImagesContentComponent]
})
export class HomeModule { }
