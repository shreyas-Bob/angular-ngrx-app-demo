import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRemoveComponent } from './add-remove/add-remove.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: "add-remove", component: AddRemoveComponent },
  { path: "home-page", component: MainComponent },
  { path: "", component: MainComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing = RouterModule.forRoot(routes);