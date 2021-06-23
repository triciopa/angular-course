import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { EventsComponent } from './events/events.component';
import { AlertComponent } from './alert/alert.component';
import { UnderlineDirective } from './directives/underline.directive';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ExperienceComponent } from './components/experience/experience.component';


@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    ParentComponent,
    ChildComponent,
    EventsComponent,
    AlertComponent,
    UnderlineDirective,
    EmployeeComponent,
    ProyectsComponent,
    ResumeComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
