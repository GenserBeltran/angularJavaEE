import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Import de modulos de angular
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Import de servicios y componenetes
import { AppComponent } from './app.component';
import { DataService } from './data-service';
import { PersonasComponent } from './personas/personas.component';
import { PersonaService } from './persona-service';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [AppComponent, PersonasComponent, FormularioComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [PersonaService, DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
