import { PersonaService } from './persona-service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data-service';
import { PersonasComponent } from './personas/personas.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PersonasComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PersonaService, DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
