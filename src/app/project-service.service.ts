import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {QuestionModel} from './QuestionModel';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  constructor(private http: HttpClient) { }

  getAllQuestions() {
    return this.http.get<QuestionModel>('https://opentdb.com/api.php?amount=5');
  }
}
