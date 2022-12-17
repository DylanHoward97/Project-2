import { Component } from '@angular/core';
import { Tasks } from '../models/tasks';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {

  tasks: any = []

  newTask: Tasks = new Tasks('', '', '', 'inToDoList', this.tasks.length - 1);
  task: Tasks = new Tasks('', '', '', 'inToDoList', this.tasks.length - 1);

  addTask(): void {
    this.tasks.push({...this.newTask});
    console.log(this.tasks[this.tasks.length - 1]);
    this.newTask.index = this.tasks.length;
  }

  onEdit(item: any) {
    item.isEdit = true;
   }

   updateTask(task: { isEdit: boolean;}) {
      task.isEdit = false;
   }
  
  deleteTask(i: number): void {
      this.tasks.splice(i, 1);
  }

  

}
