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

  ngOnInit(): void {}

  onGuardarPersona() {
    const personaAGuardar = new Persona(this.idPersona, this.nombreInput);
    this.personaService.agregarPersona(personaAGuardar);
    this.router.navigate(['personas']);
  }
}
