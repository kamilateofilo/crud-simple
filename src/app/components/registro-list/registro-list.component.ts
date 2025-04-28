import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Registro } from '../../services/registro.service';

@Component({
  selector: 'app-registro-list',
  imports: [],
  templateUrl: './registro-list.component.html',
  styleUrl: './registro-list.component.css'
})
export class RegistroListComponent {
  @Input() registros: Registro[] = [];
  @Output() editar = new EventEmitter<Registro>();
  @Output() excluir = new EventEmitter<number>();
  @Output() arquivar = new EventEmitter<number>();
}
