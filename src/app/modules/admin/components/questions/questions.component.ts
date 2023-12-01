import { Component, Signal, inject } from '@angular/core';
import { Question, QuestionType } from 'src/app/providers/models/question.model';
import { QuestionsService } from 'src/app/providers/services/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.sass']
})
export class QuestionsComponent {
  #quesSvc = inject(QuestionsService)

  questionTypes: String[] = Object.values(QuestionType);

  questions: Signal<Question[]> = this.#quesSvc.questions;

  editQuestion(id: number) {
    // this.currentQuestion = this.questions.find(q => q.id === id);
  }

  saveQuestion() {
    console.log(this.questions())
    // console.log(this.currentQuestion)
    // if (this.currentQuestion.id === 0) {
    //   // send to server
    //   this.currentQuestion.id = this.questions.length + 1;
    //   this.questions.push(this.currentQuestion);
    // }

    // this.currentQuestion = { id: 0, content: '', question_type: QuestionType.Range };
  }
}
