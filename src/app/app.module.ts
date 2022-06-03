import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Level0Component } from './level0/level0.component';
import { Level1Component } from './level1/level1.component';
import { Level2Component } from './level2/level2.component';
import { Level3Component } from './level3/level3.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    Level0Component,
    Level1Component,
    Level2Component,
    Level3Component,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
