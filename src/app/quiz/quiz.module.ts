import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { QuestionComponent } from './question/question.component';
import { QuizComponent } from './quiz/quiz.component';
import { CountdownComponent } from './countdown/countdown.component';
import { HttpClientModule } from "@angular/common/http";
import { QuizApp } from "./quiz-app.component";
import { UnescapePipe } from './unescape.pipe';

@NgModule({
    declarations: [
        QuestionComponent,
        QuizComponent,
        CountdownComponent,
        QuizApp,
        UnescapePipe
    ],
    exports: [QuizApp],
    imports: [CommonModule, HttpClientModule]
})
export class QuizModule {}