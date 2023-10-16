import { Question } from "./question.model";
import { Slide } from "./slide.model";

export class Resource {
  id: number;
  resource_type: ResourceType;
  title: string;
  description: string;
  content?: Content;
}

export enum ResourceType {
  Slides = "slides",
  Module = "module",
  Form = "form",
  External = "external",
}

export class Content {
  slides?: Slide[];
  form?: Question[];
  module?: number[];
}
