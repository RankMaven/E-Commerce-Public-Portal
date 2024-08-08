import { Component } from '@angular/core';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmpassword: string = '';
  // constructor(private userService: UserService, private router: Router) { }


  ngOnInit(): void {
    // this.userService.reloadUser();

    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector("#container");

    sign_up_btn?.addEventListener("click", () => {
      container?.classList.add("sign-up-mode");
    });

    sign_in_btn?.addEventListener("click", () => {
      container?.classList.remove("sign-up-mode");
    });
  }

  login() {
    if (!this.email || !this.password) {
      alert('Please enter both email and password.');
      return;
    }

    // this.userService.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  register() {
    if (!this.name || !this.email || !this.password || !this.confirmpassword) {
      alert('Please fill in all fields.');
      return;
    }

    // this.userService.register(this.name, this.email, this.password);
    this.name = '';
    this.email = '';
    this.password = '';
    this.confirmpassword = '';
  }

  signInWithGoogle() {
    // this.userService.googleSignIn();
  }

  forgotPassword() {
    // this.userService.forgotPassword(this.email);
  }
}
