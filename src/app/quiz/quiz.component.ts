import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../question';
import { TriviaService } from '../trivia.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @Input() timeout: boolean = false;

  questions: Question[];
  submited: boolean = false;
  answers: Record<string, 'correct' | 'incorrect'> = {};

  result: number = null;

  constructor(private trivia: TriviaService) {}

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.trivia.getQuestions()
      .subscribe(questions => this.questions = questions)
  }

  registerAnswer([question, status]) {
    this.answers[question] = status; 
  }

  onSubmit() {
    this.submited = true;
    this.getResults();
  }

  getResults() {
    this.result = Object.values(this.answers)
      .filter(answer => answer === 'correct')
      .length
  }
}
