import { Injectable } from "@angular/core";

@Injectable()
export class MyToken{
  loggedIn(): boolean{
    let temp = sessionStorage.getItem("loginInfo");
    if(temp != null){
      return true;
    }else{
      return false;
    }
  }
}
