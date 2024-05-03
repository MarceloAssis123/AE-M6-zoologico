import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';
import * as request from 'supertest';

describe('ZoologicoController (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('Criar Zoologico', () => {
    it('(Sucesso) deve retornar uma mensagem de afirmação', async () => {
      const body = {
        "nome_zoologico": "teste",
      }

      const testeSucesso = await request(app.getHttpServer())
        .post('/zoologico')
        .send(body)
        .then((response) => {
          expect(response.text).toBe('Jogo Criado com nome teste')
        })
      return testeSucesso
    });
  });

  describe('Recinto', () => {
    it('(Sucesso) Criar um recinto', async () => {
      const body = {
        "nome_zoologico": "teste",
        "nome_recinto": "recinto_teste",
      }

      const testeErro = await request(app.getHttpServer())
        .post('/zoologico/recinto')
        .send(body)
        .then((response) => {
          expect(response.text).toBe('Recinto recinto_teste Criado.')
        })
      return testeErro
    });

    it('(Sucesso) Limpar Recinto', async () => {
      const body = {
        "nome_zoologico": "teste",
        "nome_recinto": "recinto_teste",
      }

      const testeErro = await request(app.getHttpServer())
        .post('/zoologico/limpar-recinto')
        .send(body)
        .then((response) => {
          expect(response.text).toBe('Recinto recinto_teste limpado, agora está com 100 de saude')
        })
      return testeErro
    });
  });

  describe('Animal', () => {
    it('(Sucesso) Criar um animal', async () => {
      const body = {
        "nome_zoologico": "teste",
        "nome_recinto": "recinto_teste",
        "nome_animal": "Leao1",
        "especie": "Felino",
        "nivel_felicidade": 100,
      }

      const testeErro = await request(app.getHttpServer())
        .post('/zoologico/animal')
        .send(body)
        .then((response) => {
          expect(response.text).toBe('Animal: {"nome_animal":"Leao1","especie_animal":"Felino","nivel_felicidade_animal":100}, criado em recinto_teste')
        })
      return testeErro
    });

    it('(Sucesso) Alimentar Animal', async () => {
      const body = {
        "nome_zoologico": "teste",
        "nome_recinto": "recinto_teste",
        "index_animal": 0,
        "quantidade": -10
      }

      const testeErro = await request(app.getHttpServer())
        .post('/zoologico/alimentar')
        .send(body)
        .then((response) => {
          expect(response.text).toBe('{"nome_animal":"Leao1","especie_animal":"Felino","nivel_felicidade_animal":90} foi alimentado')
        })
      return testeErro
    });

    it('(Sucesso) ver Animais', async () => {
      const body = {
        "nome_zoologico": "teste",
        "nome_recinto": "recinto_teste",
      }

      const testeErro = await request(app.getHttpServer())
        .post('/zoologico/ver-animal')
        .send(body)
        .then((response) => {
          expect(response.text).toBe('Aqui estão os animais do seu recinto: [{"nome_animal":"Leao1","especie_animal":"Felino","nivel_felicidade_animal":90}]')
        })
      return testeErro
    });

  });

  describe('Proxima Rodada', () => {
    it('(Sucesso) deve retornar uma mensagem de afirmação', async () => {
      const body = {
        "nome_zoologico": "teste",
      }

      const testeSucesso = await request(app.getHttpServer())
        .post('/zoologico/proxima-rodada')
        .send(body)
        .then((response) => {
          expect(response.text).toBe('Iniciando rodada 2, sua quantidade de dinheiro é R$152,00')
        })
      return testeSucesso
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
