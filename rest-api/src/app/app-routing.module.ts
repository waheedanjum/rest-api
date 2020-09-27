import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddServerComponent } from "./components/add-server/add-server.component";
import { ListDetailsComponent } from "./components/list-details/list-details.component";
import { ListComponent } from "./components/list/list.component";

const routes: Routes = [
  {
    path: "home",
    component: ListComponent,
  },
  {
    path: "add-server",
    component: AddServerComponent,
  },
  {
    path: "list-server-details/:uuid",
    component: ListDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
