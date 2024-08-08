import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  @Input() isLogin: boolean = true;

  toggleAuthMode() {
    this.isLogin = !this.isLogin;
  }
}