import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Category } from '../objectClass/category';
import { AngularFireStorage } from 'angularfire2/storage';
import { Product } from '../objectClass/product';
import { NewInfo } from '../objectClass/newInfo';
import { ConfigInfo } from '../objectClass/configInfo';
import { Promotion } from '../objectClass/promotion';
import { Cart } from '../objectClass/cart';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  news = 'news';
  category = 'category';
  config = 'config';
  product = 'product';
  slash = '/';
  promotion = 'promotion';
  cart = 'cart';
  tuyendung = 'tuyendung';
  gioithieu = 'gioithieu';

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage,) { }
  change_alias(alias) {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    str = str.replace(/ + /g," ");
    str = str.replace(/ /g,'-');
    str = str.trim(); 
    return str;
  }
  getObject(path): Observable<any> {
    return this.db.object('/' + path).valueChanges();
  }
  getListObject(path): Observable<any[]> {
    return this.db.list(path).valueChanges();
  }
  getObjectByKey(path, key, value): Observable<any> {
    const refone = this.db.database.ref(path).orderByChild(key).equalTo(value).limitToFirst(1);
    return this.db.list('/' + path, ref => refone).valueChanges();
  }
  getListObjectByKey(path, key, value): Observable<any[]> {
    const refone = this.db.database.ref(path).orderByChild(key).equalTo(value);
    return this.db.list('/' + path, ref => refone).valueChanges();
  }
  getAllCategory(): Observable<any[]> {
    return this.getListObject(this.category);
  }
  getAllProduct(): Observable<any[]> {
    return this.getListObject(this.product);
  }
  getAllPromotion(): Observable<any[]>{
    return this.getListObject(this.promotion);
  }
  getProductByCategory(categoryId): Observable<any[]> {
    return this.getListObjectByKey(this.product,'categoryId',categoryId);
  }
  getAllNews(): Observable<any[]> {
    return this.getListObject(this.news);
  }
  getAllCart(): Observable<any[]> {
    return this.getListObject(this.cart);
  }
  getNewsById(id): Observable<any>{
    return this.getObjectByKey(this.news,'id',id);
  }
  getGioiThieuById(id): Observable<any>{
    return this.getObjectByKey(this.gioithieu,'id',id);
  }
  getTuyenDungById(id): Observable<any>{
    return this.getObjectByKey(this.tuyendung,'id',id);
  }
  getNewsByLink(link): Observable<any>{
    return this.getObjectByKey(this.news,'link',link);
  }
  getProductById(id): Observable<any>{
    return this.getObjectByKey(this.product,'id',id);
  }
  getProductByLink(link): Observable<any>{
    return this.getObjectByKey(this.product,'link',link);
  }
  getCategoryById(id): Observable<any>{
    return this.getObjectByKey(this.category,'id',id);
  }
  getPromotionById(id): Observable<any>{
    return this.getObjectByKey(this.promotion,'id',id);
  }
  getCategoryByLink(link): Observable<any>{
    return this.getObjectByKey(this.category,'link',link);
  }
  getConfig(): Observable<any>{
    return this.getObject(this.config);
  }
  
  saveCategory(category: Category) {
    var newCategoryKey = category.id;
    if(category.id === ''){
      newCategoryKey = this.db.database.ref().child(this.category).push().key;
      category.id = newCategoryKey;
    }
    const updates = {};
    updates[this.slash+ this.category + this.slash  + newCategoryKey] = category;
    return this.db.database.ref().update(updates);
  }
  saveCart(cart: Cart) {
    var newCategoryKey = cart.id;
    if(cart.id === ''){
      newCategoryKey = this.db.database.ref().child(this.cart).push().key;
      cart.id = newCategoryKey;
    }
    const updates = {};
    updates[this.slash+ this.cart + this.slash  + newCategoryKey] = cart;
    return this.db.database.ref().update(updates);
  }
  savePromotion(promotion: Promotion) {
    var newCategoryKey = promotion.id;
    if(promotion.id === ''){
      newCategoryKey = this.db.database.ref().child(this.promotion).push().key;
      promotion.id = newCategoryKey;
    }
    const updates = {};
    updates[this.slash+ this.promotion + this.slash  + newCategoryKey] = promotion;
    return this.db.database.ref().update(updates);
  }
  saveProduct(product: Product) {
    var newKey = product.id;
    if(product.id === ''){
      newKey = this.db.database.ref().child(this.product).push().key;
      product.id = newKey;
    }
    const updates = {};
    updates[this.slash+ this.product + this.slash  + newKey] = product;
    return this.db.database.ref().update(updates);
  }
  saveNews(news: NewInfo) {
    var newKey = news.id;
    if(news.id === ''){
      newKey = this.db.database.ref().child(this.news).push().key;
      news.id = newKey;
    }
    const updates = {};
    updates[this.slash+ this.news + this.slash  + newKey] = news;
    return this.db.database.ref().update(updates);
  }
  saveTuyenDung(news: NewInfo) {
    var newKey = 'tuyen-dung';
    if(news.id === ''){
      //newKey = this.db.database.ref().child(this.news).push().key;
      news.id = 'tuyen-dung';
    }
    const updates = {};
    updates[this.slash+ this.tuyendung + this.slash  + newKey] = news;
    return this.db.database.ref().update(updates);
  }
  saveGioiThieu(news: NewInfo) {
    var newKey = 'gioi-thieu';
    if(news.id === ''){
      //newKey = this.db.database.ref().child(this.news).push().key;
      news.id = 'gioi-thieu';
    }
    const updates = {};
    updates[this.slash+ this.gioithieu + this.slash  + newKey] = news;
    return this.db.database.ref().update(updates);
  }
  saveConfig(config: ConfigInfo) {
    const updates = {};
    updates[this.slash+ this.config] = config;
    return this.db.database.ref().update(updates);
  }
  deleteCategory(categoryId) {
    this.db.database.ref().child(this.category).child(categoryId).set(null);
  }
  deletePromotion(promotionId) {
    this.db.database.ref().child(this.promotion).child(promotionId).set(null);
  }
  deleteProduct(id) {
    this.db.database.ref().child(this.product).child(id).set(null);
  }
  deleteNews(id) {
    this.db.database.ref().child(this.news).child(id).set(null);
  }
  deleteFileStore(path){
    this.storage.ref(path).delete();
  }
}
