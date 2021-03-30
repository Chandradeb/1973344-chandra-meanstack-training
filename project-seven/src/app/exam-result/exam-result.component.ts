import { Component, OnInit } from '@angular/core';
import { Answer } from '../answer.model';
import { Question } from '../question.model';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-exam-result',
  templateUrl: './exam-result.component.html',
  styleUrls: ['./exam-result.component.css']
})
export class ExamResultComponent implements OnInit {
  data:Array<Question>=[];
  selectedAnswer:any =[];
  resultArray:Array<Answer> = new Array();
  msgArray:string[] = [];
  match:number= 0;
  constructor(public quesSer:QuestionService) { }

  ngOnInit(): void {
    this.quesSer.loadQuestion().subscribe(result=>{
      this.data = result;
      this.showResult();
    });
  }

  showResult(){
    this.selectedAnswer= JSON.parse(sessionStorage.getItem("answers") || "{}");
    this.validate();
  }

  validate(){
    let i =0;
    let msg1:string="<<You picked this answer, it is incorrect>>";
    let msg2:string="<<This is the correct answer, good job!>>";
    let msg3:string="";
    let msg4:string="<<This is the correct answer, a for effort>>";
    for(let temp1 of this.data){
      if(this.selectedAnswer[i] === temp1.corrAns){
        for(let k = 0; k < 4; k++){
          if(k+1 === Number(temp1.corrAns)){
            this.msgArray[k] = msg2;
          }else{
            this.msgArray[k] = msg3;
          }
        }
        this.match++;
      }else{
        for(let j = 0; j < 4; j++){
          if(j+1 === Number(temp1.corrAns)){
            this.msgArray[j] = msg4;
          }else if(j+1 === Number(this.selectedAnswer[i])){
            this.msgArray[j] = msg1;
          }else{
            this.msgArray[j] = msg3;
          }
        }
      }
      let tempResult = new Answer(this.msgArray[0], this.msgArray[1], 
        this.msgArray[2], this.msgArray[3]);
      this.resultArray.push(tempResult);
      i++;
    }
  }

}
