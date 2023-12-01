import { Component, Signal, inject } from '@angular/core';
import { Slide, SlideType } from 'src/app/providers/models/slide.model';
import { SlidesService } from 'src/app/providers/services/slides.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.sass']
})
export class SlidesComponent {
  #slidesService = inject(SlidesService)
  slideTypes: String[] = Object.keys(SlideType).map(key => SlideType[key]);
  slides: Signal<Slide[]> = this.#slidesService.slides;
}
