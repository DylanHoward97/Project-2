import { Component, Input } from '@angular/core';
import { Tasks } from '../models/tasks';

@Component({
  selector: 'app-finished-list',
  templateUrl: './finished-list.component.html',
  styleUrls: ['./finished-list.component.css']
})
export class FinishedListComponent {
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
