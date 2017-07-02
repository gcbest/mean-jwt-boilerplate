import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SelectTopicComponent} from './select-topic/select-topic.component';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';

const appRoutes: Routes = [
  { path: '', component: SelectTopicComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)]
})

export class AppRoutingModule {}
