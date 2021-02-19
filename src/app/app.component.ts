import { Component, OnInit } from '@angular/core';
import { Question } from './question';
import { TriviaService } from './trivia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
