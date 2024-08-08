import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserAuthComponent } from '../user-auth/user-auth.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UserAuthComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [FooterComponent,HeaderComponent]
})
export class SharedModule { }
