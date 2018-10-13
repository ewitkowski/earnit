import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WantedComponent } from './wanted/wanted.component';
import { EarnedComponent } from './earned/earned.component';

@NgModule({
  declarations: [
    AppComponent,
    WantedComponent,
    EarnedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
