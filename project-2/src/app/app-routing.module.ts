import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishedListComponent } from './finished-list/finished-list.component';
import { HomeComponent } from './home/home.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'to-do-list',
    component: ToDoListComponent
  },
  {
    path: 'finished-list',
    component: FinishedListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
