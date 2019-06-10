import { Component, OnInit, Input} from '@angular/core';
import {QuestionModel} from '../QuestionModel';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  answers;
  divBackgroundsWrongAnswers = null;

  @Input()
  question: QuestionModel;


  constructor() { }

  ngOnInit() {
    this.answers = this.question.incorrect_answers;
    this.answers.push(this.question.correct_answer);

    this.answers.sort();

  }
  checkAnswer(answer){
    if(this.divBackgroundsWrongAnswers != null)
      this.divBackgroundsWrongAnswers.style.backgroundColor = 'white';

    var div = document.getElementById(answer);
    if(answer === this.question.correct_answer) {
      div.style.backgroundColor = 'green';
    } else {
      div.style.backgroundColor = 'red';
    }
    this.divBackgroundsWrongAnswers = div;
  }

}
