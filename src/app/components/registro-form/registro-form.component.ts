import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Registro } from '../../services/registro.service';

@Component({
  selector: 'app-registro-form',
  imports: [],
  templateUrl: './registro-form.component.html',
  styleUrl: './registro-form.component.css'
})
export class RegistroFormComponent {
  @Output() salvar = new EventEmitter<{nome: string, cidade: string}>();
  @Input() registroParaEditar?: Registro;

  nome = '';
  cidade = '';

  ngOnChange() {
    if(this.registroParaEditar) {
      this.nome = this.registroParaEditar.nome;
      this.cidade = this.registroParaEditar.cidade;
    }
  }

  enviar() {
    this.salvar.emit({nome: this.nome, cidade: this.cidade})
    this.nome = '';
    this.cidade = '';
  }

}
