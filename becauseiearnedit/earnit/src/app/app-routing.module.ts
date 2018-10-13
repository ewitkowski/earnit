//https://angular.io/tutorial/toh-pt5

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarnedComponent } from './earned/earned.component';
import { WantedComponent } from './wanted/wanted.component';

const routes: Routes = [
  { path: 'earned', component: EarnedComponent },
  { path: 'wanted', component: WantedComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}