import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { ChildComponent } from './child/child.component';
import { EventsComponent } from './events/events.component';
import { GreetingComponent } from './greeting/greeting.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: ''},
  { path: 'greeting', component: GreetingComponent},
  { path: 'parent', redirectTo: 'greeting'},
  { path: 'events', component: EventsComponent},
  { path: 'child', component: ChildComponent},
  { path: '**', redirectTo: 'greeting'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
