import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Category } from '../objectClass/category';
import { AngularFireStorage } from 'angularfire2/storage';
import { Product } from '../objectClass/product';
import { NewInfo } from '../objectClass/newInfo';
import { ConfigInfo } from '../objectClass/configInfo';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  news = 'news';
  category = 'category';
  config = 'config';
  product = 'product';
  configHomePage = 'configHomePage';
  slash = '/';
  configObject: ConfigInfo;

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage,) { }
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
  getAllCategory(): Observable<any[]> {
    return this.getListObject(this.category);
  }
  getAllProduct(): Observable<any[]> {
    return this.getListObject(this.product);
  }
  getAllNews(): Observable<any[]> {
    return this.getListObject(this.news);
  }
  getNewsById(id): Observable<any>{
    return this.getObjectByKey(this.news,'id',id);
  }
  getProductById(id): Observable<any>{
    return this.getObjectByKey(this.product,'id',id);
  }
  getCategoryById(id): Observable<any>{
    return this.getObjectByKey(this.category,'id',id);
  }
  getConfig(): Observable<any>{
    return this.getObject(this.config);
  }
  getConfigHomePage(): Observable<any>{
    return this.getObject(this.configHomePage);
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
  saveConfig(config: ConfigInfo) {
    const updates = {};
    updates[this.slash+ this.config] = config;
    return this.db.database.ref().update(updates);
  }
  deleteCategory(categoryId) {
    this.db.database.ref().child(this.category).child(categoryId).set(null);
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
