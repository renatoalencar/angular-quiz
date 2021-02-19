import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  time: number;

  ngOnInit() {
    const timeout = 10;
    interval(1000)
      .pipe(map(x => timeout - x))
      .pipe(takeWhile(x => x >= 0))
      .subscribe((x) => {
        this.time = x;
      });
  }
}
