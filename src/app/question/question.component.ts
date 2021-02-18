import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;

  selectedAnswer: string = null;
  answered: boolean = false;

  answers: string[]

  ngOnInit() {
    this.randomizeAnwsers();
  }

  randomizeAnwsers() {
    this.answers = [this.question.correct_answer, ...this.question.incorrect_answers]
      .sort(() => Math.random() - 0.5)
  }

  onSelectAnswer(answer: string) {
    if (this.answered) return;
  
    this.selectedAnswer = answer;
  }

  onAnswer() {
    this.answered = true;
  }
}
