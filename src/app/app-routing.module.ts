import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SelectTopicComponent} from './select-topic/select-topic.component';


const appRoutes: Routes = [
  { path: '', component: SelectTopicComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)]
})

export class AppRoutingModule {}
