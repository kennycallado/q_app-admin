import { Component, Signal, inject } from '@angular/core';
import { PubRecord } from 'src/app/providers/models/record.model';
import { ProjectService } from 'src/app/providers/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent {
  #projectSvc = inject(ProjectService)

  project = this.#projectSvc.project
  records: Signal<PubRecord[]>;

  load_records() {
    this.records = this.#projectSvc.get_records()
  }

  removeKey(key: string) {
    this.project().keys = this.project().keys.filter(k => k !== key)
  }

  addKey(input: HTMLInputElement) {
    if (input.value === '') return ;

    this.project().keys.push(input.value)
    input.value = ''
  }

  restore() {
    this.#projectSvc.restore_project()
  }

  save() {
    this.#projectSvc.set_project(this.project())
  }
}
