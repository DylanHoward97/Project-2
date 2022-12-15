import { Component, Input } from '@angular/core';
import { Tasks } from '../models/tasks';

@Component({
  selector: 'app-finished-list',
  templateUrl: './finished-list.component.html',
  styleUrls: ['./finished-list.component.css']
})
export class FinishedListComponent {
  tasks: any = []

  newTask: Tasks = new Tasks('', '', '', 'inToDoList', this.tasks.length - 1);

  addTask(): void {
    this.tasks.push({...this.newTask});
    console.log(this.tasks[this.tasks.length - 1]);
  }

  deleteTask(i: number): void {
    this.tasks.splice(i, 1);
  }

}
