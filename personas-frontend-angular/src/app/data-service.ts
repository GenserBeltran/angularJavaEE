import { Persona } from './persona.model';
import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class ServiceNameService {
  constructor(private httpClient: HttpClient) {}

  urlBase = 'http://localhost:8080/personas-backend-java/webservice/personas';

  cargarPersonas(){
  return this.httpClient.get(this.urlBase);
}
  agregarPersonas(persona: Persona){
    return this.httpClient.post(this.urlBase, persona);
  }

  modificarPersona(idPersona: number, persona: Persona){
    let url: string;
    url = this.urlBase + '/' + idPersona;
    this.httpClient.put(url, persona)
    .subscribe(
      (response ) => {
        console.log('resultado modificar Persona: ' + response);
      },
      (error) => console.log('Error en modificar Persona: ' + error)
      );
  }

  elminarPersona(idPersona: number){
    let url: string;
    url = this.urlBase + '/' + idPersona;
    this.httpClient.delete(url)
    .subscribe(
      (response ) => {
        console.log('resultado eleminar Persona: ' + response);
      },
      (error) => console.log('Error en eleminar Persona: ' + error)
      );

  }

}

