import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  @Input() taskName: string = '';
  @Input() creationDate: string = '';
  @Input() completedDate: string = '';
  @Input() location: string = '';

  @Output()listChangeEvent = new EventEmitter<string>();



}
