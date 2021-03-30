import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()

export class MyAuthGuard implements CanActivate{
    canActivate(){
        let temp = sessionStorage.getItem("token");
        if (temp != null){
            console.log(temp);
            return true;
        }else{
            return false;
        }
    }
}