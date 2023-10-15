import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectSelectorComponent } from './components/project-selector/project-selector.component';

@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    ProjectComponent,
    ProjectSelectorComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule
  ]
})
export class AdminModule { }
