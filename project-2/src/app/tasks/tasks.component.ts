import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Tasks } from '../models/tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  @Input() tasks: any;


  @Output() listChangeEvent = new EventEmitter<any>();


  changeList() {
    this.listChangeEvent.emit();
  }

  
  

}
