import { Injectable } from '@angular/core';

export interface Registro {
  id: number;
  nome: string;
  cidade: string;
  arquivado: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class RegistroService {
 
  private registros: Registro[] = []
  private idCounter = 1;
  // registros: any[] = [];

  constructor() { }

  adicionarRegistro(nome: string, cidade: string): void{
    this.registros.push({
      id: this.idCounter++,
      nome,
      cidade,
      arquivado: false
    })
  }

  obterRegistros(): Registro[] {
    return [...this.registros]
  }

  editarRegistro(id: number, nome: string, cidade: string): void {
    const registro = this.registros.find(r => r.id === id);
    if (registro) {
      registro.nome = nome;
      registro.cidade = cidade;
    }
  }

  excluirRegistro(id: number): void {
    this.registros = this.registros.filter(r => r.id !== id);
  }

  arquivarRegistro(id: number): void {
    const registro = this.registros.find(r => r.id === id);
    if (registro) {
      registro.arquivado = true;
    }
  }
}
