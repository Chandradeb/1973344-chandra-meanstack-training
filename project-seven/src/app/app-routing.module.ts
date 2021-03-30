import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ExamResultComponent } from './exam-result/exam-result.component';
import { MyAuthGuard } from './myAuthGuard';
import { MyAuthGuard2 } from './myAuthGuard2';
import { MyAuthGuard3 } from './myAuthGuard3';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {path: "quiz", component:QuizComponent, canActivate:[MyAuthGuard]},
  {path: "examResult", component: ExamResultComponent, canActivate:[MyAuthGuard2]},
  {path: "", component: AppComponent, canActivate: [MyAuthGuard3]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
