import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MyAuthGuard } from './myAuthGuard';
import { MyAuthGuard2 } from './myAuthGuard2';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PortfolioComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [MyAuthGuard, MyAuthGuard2],
  bootstrap: [AppComponent]
})
export class AppModule { }
