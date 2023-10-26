import { Component } from '@angular/core';
import { QuestionType } from 'src/app/providers/models/question.model';
import { Resource, ResourceType } from 'src/app/providers/models/resource.model';
import { SlideType } from 'src/app/providers/models/slide.model';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.sass']
})
export class ResourcesComponent {
  currentResource: Resource = { id: 0, resource_type: ResourceType.External, title: '', description: '' };
  resourceTypes: String[] = Object.values(ResourceType);

  resources: Resource[] = [
    { id: 1, resource_type: ResourceType.Slides, title: 'Slide 1', description: 'This is the first slide', content: { slides: [
      { id: 1, title: 'Slide 1', slide_type: SlideType.Content, content: 'This is the content of the first slide' },
      { id: 2, title: 'Slide 2', slide_type: SlideType.Content, content: 'This is the content of the second slide' }, ] } },

    { id: 2, resource_type: ResourceType.Form, title: 'Slide 2', description: 'This is the second slide', content: { form: [
      { id: 1, content: 'What is your name?', question_type: QuestionType.Input },
      { id: 2, content: 'What is your quest?', question_type: QuestionType.Input }, ] } },
  ]

  getResourceContent(resource: Resource): string {
    let response = [];

    switch (resource.resource_type) {
      case ResourceType.Slides:
        resource.content.slides.forEach(slide => { response.push(slide.id) })
        break
      case ResourceType.Form:
        resource.content.form.forEach(question => { response.push(question.id) })
        break
      case ResourceType.Module:
        resource.content.module.forEach(module => { response.push(module) })
        break
    }

    return response.toString()
  }
}
