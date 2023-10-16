import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProjectComponent } from './components/project/project.component'
import { QuestionsComponent } from './components/questions/questions.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SlidesComponent } from './components/slides/slides.component';
import { MediaComponent } from './components/media/media.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ScriptsComponent } from './components/scripts/scripts.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'project', component: ProjectComponent },
      { path: 'questions', component: QuestionsComponent },
      { path: 'media', component: MediaComponent },
      { path: 'slides', component: SlidesComponent },
      { path: 'resources', component: ResourcesComponent },
      { path: 'scripts', component: ScriptsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
