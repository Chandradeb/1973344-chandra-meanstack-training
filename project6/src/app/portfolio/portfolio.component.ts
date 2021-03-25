import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContInfo } from '../info.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  contactRef = new FormGroup({
    contact: new FormControl(),
    num: new FormControl()
  });

  contObj:Array<ContInfo> = new Array();
  welMsg:string = "" ;

  constructor() { }

  ngOnInit(): void {
    this.getWelMsg();
  }

  printTable(){
    if(this.contactRef.get("contact")?.value == null || this.contactRef.get("num")?.value == null
      || this.contactRef.get("contact")?.value == "" || this.contactRef.get("num")?.value == ""){
      alert("Please fill up all the informations");
      return;
    }

    let contactInfo = new ContInfo(this.contactRef.get("contact")?.value, this.contactRef.get("num")?.value);
    this.contObj.push(contactInfo);
    console.log(this.contObj);
    this.contactRef.reset();
  }

  getWelMsg(){
    let temp = sessionStorage.getItem("loginInfo");
    this.welMsg = "Welcome <<" + temp + ">>";
  }

}
