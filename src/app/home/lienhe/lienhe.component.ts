import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfigInfo } from '../../objectClass/configInfo';
import { ISubscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { AdminService } from '../../administrator/admin.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'lienhe',
  templateUrl: './lienhe.component.html',
  styleUrls: ['./lienhe.component.scss']
})
export class LienheComponent implements OnInit,OnDestroy {

  config = new ConfigInfo;
  subscriptionConfig :ISubscription;

  name:string;
  email:string;
  content:string;
  constructor(private http: HttpClient,private router: Router,private service: AdminService) { }

  ngOnInit() {
    this.config = new ConfigInfo();
    this.subscriptionConfig = this.service.getConfig().subscribe(response => {
      this.config = response;
    });
  }
  ngOnDestroy(){
    this.subscriptionConfig.unsubscribe();
  }
  sendEmail() {

    let url = `https://us-central1-dongtrunghathao-87305.cloudfunctions.net/function`
    let headers = new HttpHeaders(
      {
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      });
    let body = {
      'to': 'mr.hoaan@gmail.com',
      'from': 'mr.hoaan@gmail.com',
      'subject': 'Thông tin liên hệ',
      'content': `
      Người gửi: ${this.name},
      Email:  ${this.email},
      Nội dung: ${this.content}      
      `
    };
    const httpOptions = {
      headers: headers
    };

    return this.http.post(url, body, httpOptions)
      .toPromise()
      .then(res => {
        console.log(res);
        alert('Thông tin đã được gửi đi, chúng tôi sẽ liên hệ với bạn');
      })
      .catch(err => {
        console.log(err)
      })

  }
}
