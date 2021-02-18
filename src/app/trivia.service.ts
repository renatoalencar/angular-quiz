import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import { Question } from './question';

export interface TriviaResponse {
  response_code: number;
  results: Question[];
}

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<TriviaResponse>('https://opentdb.com/api.php?amount=10&category=11&type=multiple')
      .pipe(map(response => response.results))
  }
}
