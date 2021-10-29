import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertRoutingModule } from './alert-routing.module';
import { AlertComponent } from './alert.component'
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AlertComponent,AlertModalComponent],
  imports: [
    CommonModule,
    AlertRoutingModule, 
   MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  entryComponents:[AlertModalComponent],
})
export class AlertModule { }
