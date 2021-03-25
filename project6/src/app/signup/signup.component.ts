import { unwrapResolvedMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Info } from '../info.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signUpRef = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    pass: new FormControl()
  });

  signUpObj:Array<Info>=new Array();

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  submitForm(): void {
    this.saveSession();
    console.log(this.signUpRef.value);
    if(this.signUpRef.get("email")?.value == null || this.signUpRef.get("pass")?.value == null
      || this.signUpRef.get("firstName")?.value == null || this.signUpRef.get("lastName")?.value == null
      || this.signUpRef.get("email")?.value == "" || this.signUpRef.get("pass")?.value == ""
      || this.signUpRef.get("firstName")?.value == "" || this.signUpRef.get("lastName")?.value == ""){
      console.log(this.signUpRef.value);
      alert("Please fill up all the informations");
      return;
    }
    let info = new Info(this.signUpRef.get("firstName")?.value, this.signUpRef.get("lastName")?.value,
      this.signUpRef.get("email")?.value, this.signUpRef.get("pass")?.value );
    this.signUpObj.push(info);
    sessionStorage.setItem("info", JSON.stringify(this.signUpObj));
    this.router.navigate(["login"]);
  }

  saveSession(): void {
    if(sessionStorage.length !=0 && sessionStorage.getItem !== undefined){
      console.log("we did it");
      this.signUpObj = JSON.parse(sessionStorage.getItem("info")!);
      console.log(this.signUpObj);
      sessionStorage.setItem("info", JSON.stringify(this.signUpObj));
    }
  }

}
