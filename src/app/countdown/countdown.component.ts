import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  @Input() time: number;
  @Output() timeout = new EventEmitter();

  timeLeft: number;

  ngOnInit(): void {
    interval(1000)
      .pipe(map(x => this.time - x))
      .pipe(takeWhile(x => x >= 0))
      .subscribe((x) => {
        this.timeLeft = x;
        
        if (x === 0) this.timeout.emit() 
      });
  }
}
