import { Pipe, PipeTransform } from '@angular/core';
import { Registro } from '../services/registro.service';

@Pipe({
  name: 'filtro',
  standalone: true
})
export class FiltroPipe implements PipeTransform {

  transform(registro: Registro[], mostrarArquivados: boolean): Registro[] {
    return registros.filter(r => mostrarArquivados ? r.arquivados : !r.arquivados);
  }
  

}
