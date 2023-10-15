import { Component } from '@angular/core';
import { QuestionType } from 'src/app/providers/models/question.model';
import { Slide, SlideType } from 'src/app/providers/models/slide.model';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.sass']
})
export class SlidesComponent {
  currentSlide: Slide = { id: 0, slide_type: SlideType.Content, title: 'Slide 1', content: 'This is the first slide' };
  slidesTypes: String[] = Object.keys(SlideType).map(key => SlideType[key]);

  slides: Slide[] = [
    { id: 1, slide_type: SlideType.Content, title: 'Slide 1', content: 'This is the second slide' },
    { id: 2, slide_type: SlideType.Content, title: 'Slide 2', content: 'This is the third slide' },
    { id: 3, slide_type: SlideType.Input, title: 'Slide 3', question:  { id: 0, question_type: QuestionType.Range, question: 'What is your name?' }},
  ];

}
