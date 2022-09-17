import { Persona } from './../persona.model';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonaService } from './../persona-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
})
export class FormularioComponent implements OnInit {
  //Variable que recibe el valor (objeto)

  idPersona: number;
  nombreInput: string;

  constructor(
    private personaService: PersonaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.idPersona = this.route.snapshot.params['idPersona'];
    console.log('recuperamos el parametro idPersona:' + this.idPersona);
    if (this.idPersona != null) {
      const persona = this.personaService.encontrarPersona(this.idPersona);
      if (persona != null) {
        this.nombreInput = persona.nombre;
      }
    }
  }

  onGuardarPersona() {
    const personaAGuardar = new Persona(this.idPersona, this.nombreInput);
    if (this.idPersona != null) {
      this.personaService.modificarPersona(this.idPersona, personaAGuardar);
    } else {
      this.personaService.agregarPersona(personaAGuardar);
    }
    this.router.navigate(['personas']);
  }
}
