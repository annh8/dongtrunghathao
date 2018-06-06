import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { AdminService } from '../../administrator/admin.service';
import { OrderPipe } from 'ngx-order-pipe';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NewInfo } from '../../objectClass/newInfo';
import { Product } from '../../objectClass/product';
import { Category } from '../../objectClass/category';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  subscriptionNew: ISubscription;
  subscriptionProduct: ISubscription;
  subscriptionCategory: ISubscription;
  navigationSubscription;
  new: NewInfo;
  product: Product;
  category: Category;
  id: string;
  sanpham: boolean = false;
  tintuc: boolean = false;
  tuyendung: boolean = false;
  gioithieu: boolean = false;
  lienhe: boolean = false;
  thanhtoan:boolean = false;
  search:boolean = false;
  anh:boolean = false;
  constructor(
    private service: AdminService,
    private orderPipe: OrderPipe,
    private route: ActivatedRoute,
    private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
      window.scrollTo(0, 0);
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    switch (this.id) {
      case 'san-pham': this.sanpham = true; break;
      case 'tin-tuc': this.tintuc = true; break;
      case 'tuyen-dung': this.tuyendung = true; break;
      case 'gioi-thieu': this.gioithieu = true; break;
      case 'lien-he': this.lienhe = true; break;
      case 'thanh-toan': this.thanhtoan = true; break;
      case 'tim-kiem':this.search = true;break;
      case 'anh':this.anh = true;break;
      default: break;
    }
    this.subscriptionNew = this.service.getNewsByLink(this.id).subscribe((response) => {
      this.new = response[0];
    });
    this.subscriptionProduct = this.service.getProductByLink(this.id).subscribe((response) => {
      this.product = response[0];
    });
    this.subscriptionCategory = this.service.getCategoryByLink(this.id).subscribe((response) => {
      this.category = response[0];
    });
  }
  initialiseInvites() {
    this.new = null;
    this.product = null;
    this.category = null;
    this.sanpham = false;
    this.tintuc = false;
    this.tuyendung = false;
    this.gioithieu = false;
    this.lienhe = false;
    this.thanhtoan = false;
    this.search = false;
    this.anh = false;
    this.ngOnInit();
  }

  ngOnDestroy() {
    this.subscriptionNew.unsubscribe();
    this.subscriptionProduct.unsubscribe();
    this.subscriptionCategory.unsubscribe();
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
