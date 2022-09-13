import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { PushButtonComponent } from './mid-section/push-button/push-button.component';
import { TopSectionComponent } from './top-section/top-section.component';
import { MidSectionComponent } from './mid-section/mid-section.component';
import { BottomSectionComponent } from './bottom-section/bottom-section.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'

@NgModule({
  declarations: [
    AppComponent,
    PushButtonComponent,
    TopSectionComponent,
    MidSectionComponent,
    BottomSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
