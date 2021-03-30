import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../question.model';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions:Array<Question>=[];
  selectedAnswer:any =[];
  constructor(public quesSer:QuestionService, 
    public router: Router) { }

  ngOnInit(): void {
    this.quesSer.loadQuestion().subscribe(result=>this.questions=result, 
      err=>console.log(err));
  }

  loadResult(){
    sessionStorage.setItem('answers', JSON.stringify(this.selectedAnswer));
    sessionStorage.removeItem("token");
    this.router.navigateByUrl("/examResult");
  }

}
