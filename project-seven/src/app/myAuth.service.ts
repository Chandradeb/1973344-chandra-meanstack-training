import { MyToken } from './token.service';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable()
export class MyService {
    constructor(public Token:MyToken){}

    private started = new BehaviorSubject<boolean>(this.Token.started());   
    authStatus = this.started.asObservable();
    changeAuthStatus(value:boolean){
        this.started.next(value);
    }
}