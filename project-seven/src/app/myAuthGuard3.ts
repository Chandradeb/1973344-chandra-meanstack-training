import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()
export class MyAuthGuard3 implements CanActivate{
    canActivate(){
        let temp1 = sessionStorage.getItem("token")
        let temp2 = sessionStorage.getItem("answers");
        if(temp1 != null || temp2 != null){
            return false;
        }else{
            return true;
        }
    }
}