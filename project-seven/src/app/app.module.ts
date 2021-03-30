import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExamResultComponent } from './exam-result/exam-result.component';
import { MyToken } from './token.service';
import { MyService } from './myAuth.service';
import { MyAuthGuard } from './myAuthGuard';
import { MyAuthGuard2 } from './myAuthGuard2';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ExamResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MyToken, 
    MyService, 
    MyAuthGuard,
    MyAuthGuard2],
  bootstrap: [AppComponent]
})
export class AppModule { }
