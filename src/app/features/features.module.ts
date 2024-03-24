import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CountdownOptionComponent } from './countdown-option/countdown-option.component';
import { CustomCountdownComponent } from './custom-countdown/custom-countdown.component';
import { ShareModule } from '../common/share.module';
import { ViewCountdownComponent } from './view-countdown/view-countdown.component';
import { CountdownTableComponent } from './countdown-table/countdown-table.component';



@NgModule({
  declarations: [
    HomeComponent,
    CountdownOptionComponent,
    CustomCountdownComponent,
    ViewCountdownComponent,
    CountdownTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FeaturesRoutingModule,
    ShareModule
  ]
})
export class FeaturesModule { }
