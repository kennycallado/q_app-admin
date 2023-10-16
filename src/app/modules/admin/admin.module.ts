import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectSelectorComponent } from './components/project-selector/project-selector.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SlidesComponent } from './components/slides/slides.component';
import { MediaComponent } from './components/media/media.component';

@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    ProjectComponent,
    ProjectSelectorComponent,
    QuestionsComponent,
    DashboardComponent,
    SlidesComponent,
    MediaComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule
  ]
})
export class AdminModule { }
