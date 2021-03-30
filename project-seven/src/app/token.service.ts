import { Injectable } from "@angular/core";


@Injectable()
export class MyToken {
    started(): boolean{
        let temp = sessionStorage.getItem("token");
        if (temp != null) {
            return true;
        }else{
            return false;
        }
    }
}