import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyService } from './myAuth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  msg: string = "Click on Start quiz button to start the quiz."
  constructor(public router: Router, 
    public Auth: MyService) {}
  public started:boolean = true;
  ngOnInit(){
    this.Auth.authStatus.subscribe(value =>this.started=value);
  }

  startQuiz(){
    this.msg = "";
    sessionStorage.setItem("token", "started");
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl("/quiz");
  }
  title = 'project-seven';
}
