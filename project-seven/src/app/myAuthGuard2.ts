import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()
export class MyAuthGuard2 implements CanActivate{
    canActivate(){
        let temp = sessionStorage.getItem("answers");
        if(temp != null){
            return true;
        }else{
            return false;
        }
    }
}