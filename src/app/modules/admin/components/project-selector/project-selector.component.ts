import { Component, inject } from '@angular/core';
import { Project } from 'src/app/providers/models/project.model';
import { ProjectService } from 'src/app/providers/services/project.service';

@Component({
  selector: 'app-project-selector',
  templateUrl: './project-selector.component.html',
  styleUrls: ['./project-selector.component.sass']
})
export class ProjectSelectorComponent {
  #projectSvc = inject(ProjectService)

  projects    = this.#projectSvc.projects
  c_project   = this.#projectSvc.project

  change_project(project: Project) {
    if (project.id == this.c_project().id) return

    this.#projectSvc.change_project(project)
  }
}
