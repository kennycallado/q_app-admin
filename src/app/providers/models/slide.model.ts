import { Media } from "./media.model";
import { Question } from "./question.model";

export class Slide {
  id: number;
  slide_type: SlideType;
  title: string;
  media?: Media | number;
  content?: string;
  question?: Question | number;
}

export enum SlideType {
  Content = 'content',
  Input = 'input',
}
