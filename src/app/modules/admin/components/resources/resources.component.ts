import { Component, Signal, inject } from '@angular/core';
import { Resource, ResourceType } from 'src/app/providers/models/resource.model';
import { ResourcesService } from 'src/app/providers/services/resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.sass']
})
export class ResourcesComponent {
  #resoSvc = inject(ResourcesService)

  resourceTypes: String[] = Object.values(ResourceType);

  resources: Signal<Resource[]> = this.#resoSvc.resources

  getResourceContent(resource: Resource): string {
    let response = [];

    switch (resource.type) {
      case ResourceType.Slides:
        response.push(resource.slides.length)
        // resource.slides.forEach((slide: any) => { response.push(slide.ref) })
        break
      case ResourceType.Form:
        response.push(resource.form.length)
        // resource.form.forEach((question: any) => { response.push(question.id) })
        break
      case ResourceType.Module:
        response.push(resource.module.length)
        // resource.module.forEach((module: any) => { response.push(module.id) })
        break
    }

    return response.toString()
  }
}
