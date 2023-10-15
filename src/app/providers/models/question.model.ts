export class Question {
  id: number;
  question_type: QuestionType;
  question: string;
}

export enum QuestionType {
  Checkbox = 'checkbox',
  Input = 'input',
  Radio = 'radio',
  Range = 'range',
}
