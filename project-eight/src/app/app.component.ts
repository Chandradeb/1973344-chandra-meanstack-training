import { ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'project-eight';
  taskArray:Array<Task>=[];
  displayedColumns: string[] = ['id', 'name', 'task', 'deadline'];
  @ViewChild(MatTable) table!: MatTable<any>;
  constructor(public taskSer:TasksService){}

  ngOnInit(): void{
    this.reloadTask();
  }

  saveTask(taskRef:NgForm){
    const newData = this.taskArray;
    newData.push(taskRef.value);
    this.taskArray = newData;
    this.taskSer.storeTask(taskRef.value);
    this.table.renderRows();
    taskRef.reset();
  }

  reloadTask():void{
    this.taskArray=[]
    this.taskSer.loadTasks().subscribe(result=>this.taskArray=result, err=>console.log(err));
  }
}

