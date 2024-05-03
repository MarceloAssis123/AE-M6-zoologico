import { Injectable } from '@nestjs/common';
import zoologico from './zoologico.class';

@Injectable()
export class AppService {
  private Jogo = {}

  async criarJogo(nome_zoologico: string): Promise<string> {
    if (!nome_zoologico) {
      return 'Nome de jogo inválido'
    }
    if (this.Jogo[nome_zoologico]) {
      return `Jogo já existente com esse nome: ${nome_zoologico}`
    }

    this.Jogo[nome_zoologico] = await new zoologico(nome_zoologico)
    return `Jogo Criado com nome ${nome_zoologico}`
  }

  async cria_recinto(nome_zoologico: string, nome_recinto: string): Promise<string> {
    try {
      let jogo = this.Jogo[nome_zoologico]
      return jogo.cria_recinto(nome_recinto)
    } catch {
      return 'Jogo com esse nome não criado'
    }
  }

  async criar_animal_em_um_recinto(nome_zoologico: string, nome_animal: string, especie: string, nivel_felicidade: number, nome_recinto: string): Promise<string> {
    return this.Jogo[nome_zoologico].criar_animal_em_um_recinto(nome_animal, especie, nivel_felicidade, nome_recinto)
  }

  async alimentar_animal_especifico_recinto(nome_zoologico: string, index_animal: string, quantidade: number, nome_recinto: string): Promise<string> {
    try {
      return this.Jogo[nome_zoologico].alimentar_animal_especifico_recinto(index_animal, quantidade, nome_recinto)
    } catch {
      return 'Jogo com esse nome não criado'
    }
  }

  async ver_animais(nome_zoologico: string, nome_recinto: string) {
    try {
      return this.Jogo[nome_zoologico].ver_animais(nome_recinto)
    } catch {
      return 'Jogo com esse nome não criado'
    }
  }

  async limpar_recinto_especifico(nome_zoologico: string, nome_recinto: string) {
    try {
      return this.Jogo[nome_zoologico].limpar_recinto_especifico(nome_recinto)
    } catch {
      return 'Jogo com esse nome não criado'
    }
  }

  async proxima_rodada(nome_zoologico: string) {
    try {
      return this.Jogo[nome_zoologico].proxima_rodada()
    } catch {
      return 'Jogo com esse nome não criado'
    }
  }
} 
