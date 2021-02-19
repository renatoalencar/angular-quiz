import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  timeout = false;

  ngOnInit(): void {
  }

  onTimeout() {
    this.timeout = true;
  }
}
