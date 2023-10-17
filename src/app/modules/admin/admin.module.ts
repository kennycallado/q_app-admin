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
import { ResourcesComponent } from './components/resources/resources.component';
import { ScriptsComponent } from './components/scripts/scripts.component';
import { CronjobsComponent } from './components/cronjobs/cronjobs.component';
import { UsersCreateComponent } from './components/users-create/users-create.component';
import { UsersManageComponent } from './components/users-manage/users-manage.component';
import { TokenComponent } from './components/token/token.component';

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
    ResourcesComponent,
    ScriptsComponent,
    CronjobsComponent,
    UsersCreateComponent,
    UsersManageComponent,
    TokenComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule
  ]
})
export class AdminModule { }
