import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyCustom } from './myCustom.service';
import { MyToken } from './token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyCustom, MyToken]
})
export class AppComponent implements OnInit{
  public loggedIn = true;
  constructor(private Auth: MyCustom,
    public router: Router
  ){}

  ngOnInit(){
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }
  title = 'project6';

  resetData(){
    console.log('I visited here');
    this.loggedIn = false;
    sessionStorage.removeItem("loginInfo");
    this.router.navigateByUrl("/login");
  }
}
