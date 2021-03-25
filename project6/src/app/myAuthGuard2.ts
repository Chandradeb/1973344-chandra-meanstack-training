import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()
export class MyAuthGuard2 implements CanActivate{
  canActivate(){
    let temp = sessionStorage.getItem("loginInfo");
    if(temp != null){
      return false;
    }else{
      return true;
    }
  }
}
