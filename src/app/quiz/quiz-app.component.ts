import { Component } from "@angular/core";

@Component({
    selector: 'quiz-app',
    template: `
        <quiz [timeout]="timeout"></quiz>
        <quiz-countdown [time]="10" (timeout)="onTimeout()"></quiz-countdown>
    `
})
export class QuizApp{
    timeout = false;

    onTimeout() {
        this.timeout = true;
    }
}