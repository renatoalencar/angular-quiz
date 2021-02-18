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

  constructor(private trivia: TriviaService) {}

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.trivia.getQuestions()
      .subscribe(questions => this.questions = questions)
  }
}
