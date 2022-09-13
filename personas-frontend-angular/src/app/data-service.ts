import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import {HttpClient, HttpResponse } from '@angular/common/http';


@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {}

  urlBase = 'http://localhost:8080/personas-backend-java/webservice/personas';

  cargarPersonas(){
    return this.httpClient.get<Persona>(this.urlBase);
  }

  agregarPersona(persona: Persona){
    return this.httpClient.post<Persona>(this.urlBase, persona);
  }

  modificarPersona(idPersona: number, persona: Persona){
    let url: string;
    url = this.urlBase + '/' + idPersona;
    this.httpClient.put(url, persona)
    .subscribe({
       next: response => console.log('resultado modificar Persona: ' + response),
       error: error => console.log('Error en modificar Persona: ' + error)
    });
  }

  eliminarPersona(idPersona: number){
    let url: string;
    url = this.urlBase + '/' + idPersona;
    this.httpClient.delete(url)
    .subscribe({
      next: response => console.log('resultado eliminar persona: ' + response),
      error: error => console.log('Error en eliminar persona:' + error)
  });
  }

}

