import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MyAuthGuard } from './myAuthGuard';
import { MyAuthGuard2 } from './myAuthGuard2';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: "\login", component:LoginComponent, canActivate:[MyAuthGuard2]},
  {path: "\signup", component:SignupComponent, canActivate:[MyAuthGuard2]},
  {path: "\portfolio", component:PortfolioComponent, canActivate:[MyAuthGuard]},
  {path:"",redirectTo:"\login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
