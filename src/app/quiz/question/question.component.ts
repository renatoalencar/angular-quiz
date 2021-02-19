import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'quiz-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() locked: boolean = false;

  @Output() select = new EventEmitter<[string, 'correct' | 'incorrect']>();

  selectedAnswer: string = null;

  answers: string[]

  ngOnInit() {
    this.randomizeAnwsers();
  }

  private randomizeAnwsers() {
    this.answers = [this.question.correct_answer, ...this.question.incorrect_answers]
      .sort(() => Math.random() - 0.5)
  }

  onSelectAnswer(answer: string) {
    if (this.locked) return;

    this.selectedAnswer = answer;

    this.select.emit([this.question.question, this.isCorrect() ? 'correct' : 'incorrect'])
  }

  private isCorrect() {
    return this.question.correct_answer === this.selectedAnswer;
  }
}
