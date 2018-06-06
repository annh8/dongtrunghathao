import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  showMessages = {
    error: '',
  };
  user = {
    email: '',
    password: ''
  };
  constructor(private router: Router, private authService: AuthService) {  }

  ngOnInit() {
    // this.authService.logout();
  }
  signInWithEmail() {
    this.authService.signInRegular(this.user.email, this.user.password)
       .then((res) => {
          this.router.navigate(['administrator']);
       })
       .catch((err) => {console.log('error: ' + err);
          alert('Bạn nhập sai mật khẩu hoặc email');}
      );
 }

}
