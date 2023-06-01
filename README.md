# Wanna Chat

Este proyecto es un ejemplo de cómo crear un bot conversacional utilizando la API de ChatGPT de OPEN AI con `gpt-3.5-turbo`, junto con NodeJS y NestJS.

## Description

Aprende a integrar y consumir la API de OpenAI en tu aplicación para crear asistentes de chat inteligentes y personalizados que mantengan conversaciones realistas y coherentes.

## Requisitos

- Conocimientos básicos de JavaScript, NodeJS.
- Conocimientos básico del framework `NestJS` [https://docs.nestjs.com/](https://docs.nestjs.com/).
- Una cuenta en OpenAI y acceso a la API de Chat GPT.

## Instalación

1. Crea un archivo `.env` dentro de la carpeta de `backend` con tu API key de Open AI:

```
OPENAI_API_KEY=TU_API_KEY
ORGANIZATION_ID=TU_ID_ORGANIZATION

```
2. Instala las dependencias del `backend` con el siguiente comando:

```bash
$ npm install
```
3. Inicia el servidor de desarrollo del backend

```bash
# watch mode
$ npm run start:dev

```
4. Abre [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

## Testear

1. Debes instalar `postman` [https://www.postman.com/](https://www.postman.com/) ó `insomnia` [https://insomnia.rest/download](https://insomnia.rest/download) para probar los endpoints.