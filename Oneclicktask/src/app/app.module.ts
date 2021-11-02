import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule} from '@angular/material/dialog';
import { AlertModule } from './alert/alert.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
  ],
  providers: [
  ],
  entryComponents:[AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
