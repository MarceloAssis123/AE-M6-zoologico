<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# AE-M6:
### **Criação de API Orientada a Objetos para Jogo de Zoológico**

## Instalação

```bash
$ npm install
```

## Rodando o app

```bash
# production mode
$ npm run start:prod
```

## Rodando os testes

```bash
# unit tests
$ npm run test
```

## Documentação das Rotas do Zoologico

### Rotas

#### POST /zoologico
Cria um novo zoológico.

- **Body Parameters**
  - `nome_zoologico`: string (obrigatório) - O nome do zoológico a ser criado.

- **Response**
  - Retorna o nome do zoológico criado.

#### POST /zoologico/recinto
Cria um novo recinto em um zoológico existente.

- **Body Parameters**
  - `nome_zoologico`: string (obrigatório)
  - `nome_recinto`: string (obrigatório)

- **Response**
  - Confirmação da criação do recinto.

#### POST /zoologico/animal
Adiciona um novo animal a um recinto específico.

- **Body Parameters**
  - `nome_zoologico`: string (obrigatório)
  - `nome_animal`: string (obrigatório)
  - `especie`: string (obrigatório)
  - `nivel_felicidade`: number (obrigatório)
  - `nome_recinto`: string (obrigatório)

- **Response**
  - Confirmação da adição do animal.

#### POST /zoologico/alimentar
Alimenta um animal específico dentro de um recinto.

- **Body Parameters**
  - `nome_zoologico`: string (obrigatório)
  - `index_animal`: string (obrigatório)
  - `quantidade`: number (obrigatório)
  - `nome_recinto`: string (obrigatório)

- **Response**
  - Confirmação de que o animal foi alimentado.

#### POST /zoologico/ver-animal
Lista todos os animais dentro de um recinto específico.

- **Body Parameters**
  - `nome_zoologico`: string (obrigatório)
  - `nome_recinto`: string (obrigatório)

- **Response**
  - Lista de animais no recinto especificado.

#### POST /zoologico/limpar-recinto
Limpa um recinto específico dentro de um zoológico.

- **Body Parameters**
  - `nome_zoologico`: string (obrigatório)
  - `nome_recinto`: string (obrigatório)

- **Response**
  - Confirmação da limpeza do recinto.

#### POST /zoologico/proxima-rodada
Avança para a próxima rodada no zoológico.

- **Body Parameters**
  - `nome_zoologico`: string (obrigatório)

- **Response**
  - Confirmação da atualização para a próxima rodada.
