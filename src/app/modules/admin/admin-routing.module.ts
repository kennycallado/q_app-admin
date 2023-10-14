import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProjectComponent } from './components/project/project.component'

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'project', component: ProjectComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
