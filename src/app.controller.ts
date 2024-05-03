import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('zoologico')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async criarJogo(@Body() body: {nome_zoologico:string}): Promise<string>{
    return this.appService.criarJogo(body.nome_zoologico)
  }

  @Post('recinto')
  async cria_recinto(@Body() body: {nome_zoologico: string, nome_recinto: string}): Promise<string> {
    return this.appService.cria_recinto(body.nome_zoologico, body.nome_recinto);
  }

  @Post('animal')
  async criar_animal_em_um_recinto(@Body() body: {nome_zoologico: string, nome_animal: string, especie: string, nivel_felicidade:number, nome_recinto: string}): Promise<string> {
    return this.appService.criar_animal_em_um_recinto(body.nome_zoologico, body.nome_animal, body.especie, body.nivel_felicidade, body.nome_recinto);
  }

  @Post('alimentar')
  async alimentar_animal_especifico_recinto(@Body() body: {nome_zoologico: string, index_animal: string, quantidade: number, nome_recinto: string}): Promise<string> {
    return this.appService.alimentar_animal_especifico_recinto(body.nome_zoologico, body.index_animal, body.quantidade, body.nome_recinto);
  }

  @Post('ver-animal')
  async ver_animais(@Body() body: {nome_zoologico: string, nome_recinto: string}): Promise<string> {
    return this.appService.ver_animais(body.nome_zoologico, body.nome_recinto);
  }

  @Post('limpar-recinto')
  async limpar_recinto_especifico(@Body() body: {nome_zoologico: string, nome_recinto: string}): Promise<string> {
    return this.appService.limpar_recinto_especifico(body.nome_zoologico, body.nome_recinto);
  }


  @Post('proxima-rodada')
  async proxima_rodada(@Body() body: {nome_zoologico: string}): Promise<string> {
    return this.appService.proxima_rodada(body.nome_zoologico);
  }
}
