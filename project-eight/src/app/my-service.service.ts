import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(public http:HttpClient) { }

  loadTasks():Observable<Task[]> {
    return this.http.get<Task[]>("http://localhost:3000/tasks");
  }
}
