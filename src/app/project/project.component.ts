import { Component, OnInit } from '@angular/core';
import {ProjectServiceService} from '../project-service.service';
import {QuestionModel} from '../QuestionModel';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  questions: QuestionModel;
  constructor(private projectsService: ProjectServiceService) { }

  ngOnInit() {
    this.projectsService.getAllQuestions().subscribe(
      questions => {this.questions = questions.results},
      error => { console.log(error)}
      )
  }

}
