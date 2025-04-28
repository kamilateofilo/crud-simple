import { Component } from '@angular/core';
import { Registro, RegistroService } from './services/registro.service';
import { FormsModule } from '@angular/forms';
import { FiltroPipe } from './pipes/filtro.pipe';

@Component({
  selector: 'app-root',
  imports: [FormsModule, FiltroPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  registros: Registro[] = []
  registroParaEditar?: Registro;
  mostrarArquivados = false;

  constructor(
    private RegistroService: RegistroService) {
      this.atualizarLista();
    }
  
  salvarRegistro(dados: {nome: string, cidade: string}) {
    if(this.registroParaEditar) {
      this.RegistroService.editarRegistro(this.registroParaEditar.id, dados.nome, dados.cidade);
      this.registroParaEditar = undefined;
    }else {
      this.RegistroService.adicionarRegistro(dados.nome, dados.cidade);
    }
    this.atualizarLista();
  }

  atualizarLista() {
    this.registros = this.RegistroService.obterRegistros(); 
  }

  editarRegistro(registro: Registro) {
    this.registroParaEditar = registro;
  }

  excluirRegistro(id: number) {
    this.RegistroService.excluirRegistro(id);
    this.atualizarLista()
  }

  arquivarRegistro(id: number) {
    this.RegistroService.arquivarRegistro(id)
    this.atualizarLista();
  }

  alternarMostrarArquivados() {
    this.mostrarArquivados = !this.mostrarArquivados;
  }
}
