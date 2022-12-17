import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tasks } from '../models/tasks';

@Component({
  selector: 'app-finished-list',
  templateUrl: './finished-list.component.html',
  styleUrls: ['./finished-list.component.css']
})
export class FinishedListComponent {
  
  @Input() task: any;


  @Output() updateTaskEvent = new EventEmitter<string>();
  @Output() listChangeEvent = new EventEmitter<string>();
  
  
  tasks: any = []

  newTask: Tasks = new Tasks('', '', '', 'inFinishedList', this.tasks.length - 1);

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
