import { Component } from '@angular/core';
import { Tasks } from '../models/tasks';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {

  tasks: any = [
    {
      taskName: 'Do Dishes',
      creationDate: '12/13/2022',
      dueDate: '12/13/2022',
      location: 'inToDoList',
      index: 1
    }
  ]

  newTask: Tasks = new Tasks('', '', '', 'inToDoList', this.tasks.length - 1);

  addTask(): void {
    this.tasks.push({...this.newTask});
    console.log(this.tasks[this.tasks.length - 1]);
  }
  

}
