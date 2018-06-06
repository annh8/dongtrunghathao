import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TopproductComponent } from './topproduct/topproduct.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { TuyendungComponent } from './tuyendung/tuyendung.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { SanPhamComponent } from './san-pham/san-pham.component';
import { ProductDetail } from '../objectClass/productDetail';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      
      {
        path: '',
        component: TrangchuComponent,
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: DetailComponent,
      },
      {
        path: 'gio-hang/:id',
        component: CartComponent,
      },
      {
        path: 'tim-kiem/:id',
        component: SearchComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
