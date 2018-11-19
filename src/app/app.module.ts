import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CronEditorModule } from 'cron-editor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CronEditorModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
