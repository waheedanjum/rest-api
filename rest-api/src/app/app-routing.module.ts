import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddServerComponent } from './components/add-server/add-server.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {
    path: 'list-servers',
    component: ListComponent
  },
  {
    path: 'add-server',
    component: AddServerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
