import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { MyToken } from "./token.service";


@Injectable()
export class MyCustom{
  private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());
  authStatus = this.loggedIn.asObservable();

  changeAuthStatus(value:boolean){
    this.loggedIn.next(value);
  }

  constructor(private Token:MyToken){}

}
