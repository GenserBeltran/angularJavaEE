import { Injectable } from "@angular/core";
import { DataService } from "./data-service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonaService {
 personas: Persona[] = [];

 constructor(private dataService: DataService){

 }
//Se usa para modificar el valor del arreglo a la llamada asincrona
 setPersonas(personas: Persona[]){
  this.personas = personas;
 }

 //Metodo fachada claramente no tocara el servicio
agregarPersona(persona: Persona){
  console.log('personas agregar: ' + persona.nombre);
  this.dataService.agregarPersona(persona)
.subscribe(
  (persona: any) => {
    //Recuperamos el objeto persona con el idPersona recien agregado por ende enel back el llamado a insertarPersona primero debe persistir y luego el flush
    console.log('se agregar al arreglo la persona recien Insertada subscribe: ' + persona.idPersona);
    this.personas.push(persona);
  }
);

}

encontrarPersona(id: number){
const persona: any = this.personas.find( persona => persona.idPersona == id);
console.log('Persona Encontrada: ' +  persona.idPersona + ' ' + persona.nombre);
return persona;
}

modificarPersona(id: number, persona: any){
console.log('persona a modificar: ' + persona.idPersona);
this.dataService.modificarPersona(id, persona);
}

eliminarPersona(id: number){
console.log('elminar Persona con id: ' + id);
const index = this.personas.findIndex(persona => persona.idPersona == id) //encontrar el indice del arreglo
this.personas.splice(index, 1);
this.dataService.eliminarPersona(id);
}
}
