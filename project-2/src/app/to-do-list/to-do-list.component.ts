import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tasks } from '../models/tasks';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {

  @Input() task: any;

  @Output() completeEvent = new EventEmitter<any>();

  tasks: any = [];
  finishedTasks: any = [];

  @Input() incompletedTask!: any[];

  completedTask: any;

  newTask: Tasks = new Tasks('', '', '', 'inToDoList', this.tasks.length - 1);
  newFinishedTask: Tasks = new Tasks('', '', '', 'inFinishedList', this.finishedTasks.length - 1);
  finishedTask: any;

  addTaskToDo(): void {
    this.tasks.push({...this.newTask});
    console.log(this.tasks[this.tasks.length - 1]);
    this.newTask.index = this.tasks.length;
  }

  addTaskToFinished(): void {
    this.finishedTasks.push({...this.newFinishedTask});
    console.log(this.finishedTasks[this.finishedTasks.length - 1]);
    this.newFinishedTask.index = this.finishedTasks.length;
  }

  onEdit(item: any) {
    item.isEdit = true;
   }

  updateTask(task: { isEdit: boolean;}) {
      task.isEdit = false;
  }
  
  deleteTaskToDo(i: number): void {
      this.tasks.splice(i, 1);
  }

  deleteTaskFinished(i: number): void {
    this.finishedTasks.splice(i, 1);
  }

  inToDoList: string = 'inToDoList';
  inFinishedList: string = 'inFinishedList';

  changeList(index: number, destination: string): void {
    if (destination === 'toDoList') {
      this.tasks.push(...this.finishedTasks.splice(index, 1));
      this.task.location = 'inToDoList'
    }
    else if (destination === 'finishedList') {
      this.finishedTasks.push(...this.tasks.splice(index, 1));
      this.task.location = 'inFinishedList';
    }
  }


}
  



