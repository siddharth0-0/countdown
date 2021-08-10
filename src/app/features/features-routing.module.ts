import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountdownOptionComponent } from './countdown-option/countdown-option.component';
import { CountdownTableComponent } from './countdown-table/countdown-table.component';
import { CustomCountdownComponent } from './custom-countdown/custom-countdown.component';
import { HomeComponent } from './home/home.component';
import { ViewCountdownComponent } from './view-countdown/view-countdown.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component :HomeComponent },
  { path: 'option', component :CountdownOptionComponent },
  { path: 'custom', component :CustomCountdownComponent },
  { path: 'view', component :ViewCountdownComponent },
  { path: 'dataTable', component :CountdownTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
