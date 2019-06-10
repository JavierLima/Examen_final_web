import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectComponent } from './project/project.component';

import {ProjectServiceService} from './project-service.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectComponent,
    QuestionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [ProjectServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
