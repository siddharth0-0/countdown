import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailModalComponent } from './components/detail-modal/detail-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimerComponent } from './components/timer/timer.component';



@NgModule({
  declarations: [DetailModalComponent, TimerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[DetailModalComponent, TimerComponent]
})
export class ShareModule { }
