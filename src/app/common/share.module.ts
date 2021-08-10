import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailModalComponent } from './components/detail-modal/detail-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DetailModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[DetailModalComponent]
})
export class ShareModule { }
