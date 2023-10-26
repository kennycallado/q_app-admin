import { Component } from '@angular/core';
import { Question, QuestionType } from 'src/app/providers/models/question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.sass']
})
export class QuestionsComponent {
  currentQuestion: Question = { id: 0, question_type: QuestionType.Range, content: '' };
  questionTypes: String[] = Object.values(QuestionType);
  questions: Question[] = [
    { id: 1, content: 'What is it?', question_type: QuestionType.Range },
  ]

  editQuestion(id: number) {
    this.currentQuestion = this.questions.find(q => q.id === id);
  }

  saveQuestion() {
    console.log(this.currentQuestion)
    if (this.currentQuestion.id === 0) {
      // send to server
      this.currentQuestion.id = this.questions.length + 1;
      this.questions.push(this.currentQuestion);
    }

    this.currentQuestion = { id: 0, content: '', question_type: QuestionType.Range };
  }
}
