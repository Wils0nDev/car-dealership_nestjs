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

## Descripción

[Nest](https://github.com/nestjs/nest) repositorio de inicio de TypeScript de framework.

## Instalción

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Temas 
### Archivos
- eslintrc : es un archivo de configuración de Linting, entonces es un archivo de configuración de buenas practicas para que nuestro código siga ciertas reglas o estandares

- .prettierrc : ayuda a "eslintrc" a seguir buenas practicas recomendas

### Aplicación
- Modulos : Los módulos encapsulan todo el funciónamiento de un endpoint (controllers,servicios,interfaces,entity,dtos).

- Controllers : Los controladores son responsables de manejar las solicitudes entrantes y devolver. las respuestas al cliente.

- Decoradores Params (@Param, @Body).

- Decoradores para  HTTP estándar (@Get,@Post,@Patch,@Delete).

- Services : Aqui es donde haremos la parte de lógica de nuestro negocio.

- Inyección de Dependencias : En este caso usamos para compartir Servicios externos .

- Exportación e Importación de Módulos: Nos sirve para compartir información entre modulos. ejemplo (Un servicio).
- Excepciones : NotFoundException, BadRequestException.

- Dto : Data Transfer Objecto, basicamente es una clase que o modelo que nos va a ayudar a transladar información de un lugar a otro en toda nuestra aplicación.

- class-valitor : Librería que me sirve para restringir mis modelos.

- class-transforme : Librería que me sirve para restringir mis modelos.

- Pipes : Transforman data de entrada y tambien nos sirve para validar ejemplo (ParseUUIDPipe ValidationPipe).

- useGlobalPipes: Es un pipe de alcance global que nos sirve sobre todo para validar que nuestros. request vengan tal cual nuestra modelos.

- Seed : Es un servicio que nos ayuda a generar data de prueba para compartirla en nuestros distintos modulos a travez de la inyección de dependencias. 


