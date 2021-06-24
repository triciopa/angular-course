import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PeopleComponent } from './components/people/people.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { EventsComponent } from './events/events.component';
import { GreetingComponent } from './greeting/greeting.component';
import { RandomGuard } from './random.guard';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: ''},
  { path: 'greeting', component: GreetingComponent},
  { path: 'parent', redirectTo: 'greeting'},
  { path: 'events', component: EventsComponent},
  { path: 'people', component: PeopleComponent},
  { path: 'child', component: ChildComponent, canActivate: [RandomGuard] },
  { path: 'employee/:employeeId', component: EmployeeComponent,
    children: [
      { path: 'proyects', component: ProyectsComponent},
      { path: 'resume', component: ResumeComponent},
      { path: 'experience', component: ExperienceComponent},
    ]
  },
  { path: '**', redirectTo: 'greeting'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
