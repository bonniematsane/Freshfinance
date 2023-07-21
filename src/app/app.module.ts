import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BusinessComponent } from './business/business.component';
import { DisasterComponent } from './disaster/disaster.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BusinessAdviceComponent } from './business-advice/business-advice.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { TextboxesComponent } from './textboxes/textboxes.component';
import { LastButtonsComponent } from './last-buttons/last-buttons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    ToolbarComponent,
    BusinessComponent,
    DisasterComponent,
    ButtonsComponent,
    BusinessAdviceComponent,
    ParagraphComponent,
    TextboxesComponent,
    LastButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
