import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Info } from '../info.model';
import { MyCustom } from '../myCustom.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRef = new FormGroup({
    email: new FormControl(),
    pass: new FormControl()
  });

  infoObj:Array<Info>=new Array();
  public valid:Boolean = false;

  constructor(public router: Router,
    private Auth: MyCustom
  ) { }

  ngOnInit(): void {
  }

  checkUser():void{
    if(sessionStorage.length == 0){
      alert("Please sign up first");
      return;
    }
    if(this.loginRef.get("email")?.value == null || this.loginRef.get("pass")?.value == null
      || this.loginRef.get("email")?.value == "" || this.loginRef.get("pass")?.value == ""){
      alert("Please fill up all the informations");
      return;
    }
    this.infoObj = JSON.parse(sessionStorage.getItem("info")!);
    for(var i=0; i<this.infoObj.length; i++){
      console.log(this.infoObj[i]);
      this.valid = this.validate(this.infoObj[i]);
      if(this.valid == true){
        console.log("success");
        sessionStorage.setItem("loginInfo", this.infoObj[i].fname);
        this.Auth.changeAuthStatus(true);
        this.router.navigateByUrl("/portfolio");
        return;
      }
    }
    if(this.valid == false){
      alert("Please check your credentials or if you havent signed up yet, please sign up first");
      return;
    }
  }

  validate(data:any):Boolean {
    let temp = false;
    if(data.email == this.loginRef.get("email")?.value){
      if(data.pass == this.loginRef.get("pass")?.value){
        temp = true;
      }
    }else{
      temp = false;
    }
    console.log("temp is " + temp);
    return temp;
  }
}
