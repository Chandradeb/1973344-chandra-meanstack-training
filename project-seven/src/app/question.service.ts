import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './question.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(public http: HttpClient) { }
  loadQuestion():Observable<Question[]> {
    return this.http.get<Question[]>("/assets/question.json");
  }
}
