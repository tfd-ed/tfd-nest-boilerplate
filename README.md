<p align="center">
  <a href="https://www.youtube.com/c/TeachingForDevelopment" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/SZqGIpL.png" width="80" alt="TFD Logo" /></a>
</p>


<p align="center">A <a href="https://nestjs.com/" target="_blank" rel="noopener noreferrer">Nest.js</a> boilerplate by <a href="https://www.youtube.com/c/TeachingForDevelopment" target="_blank" rel="noopener noreferrer">TFD</a> for building scalable API.</p>
<p align="center">
<img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" width="75">
<img src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white" width="80">
<img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" width="100">
<img src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white" width="70">
<img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" width="73">
<img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" width="90">
<img src="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white" width="70">
<img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" width="60">
<br/>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://badge.fury.io/js/%40nestjs%2Fcore.svg" alt="NPM Version" /></a>
<a href="https://www.gnu.org/licenses/gpl-3.0" target="_blank"><img src="https://img.shields.io/badge/License-GPLv3-blue.svg" alt="Package License" /></a>
<img alt="YouTube Channel Subscribers" src="https://img.shields.io/youtube/channel/subscribers/UCJHZ__wUxS9lgTZHMxpMJcQ?style=social">
<br/>
<img src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_560/https://adscom.biz/wp-content/uploads/2017/02/ABA-logo-no-padding.png" width="80" alt="ABA" />
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png" width="55" alt="TFD Logo" />
</p>

<h1>Scalable NestJS v8 Boilerplate
  <a
    href="http://nestjs.com/"
    target="blank"
  >
    <img
      src="https://nestjs.com/img/logo_text.svg"
      width="65"
      alt="Nest Logo"
    />
  </a>
</h1>

## Features

This is a NestJS boilerplate code with preconfigured libraries and packages with the following features:
- One-click setup with [Docker](https://www.docker.com/)
- [Typeorm](https://typeorm.io/) for Object–relational mapping, use **Postgres DB** by default 
- Sample data generation with typeorm-fixture (generate fixture based on .yaml file), visit [RobinCK/typeorm-fixtures](https://github.com/RobinCK/typeorm-fixtures).
- Preconfigured Caching Mechanism ([Redis Store](https://redis.io/))
- [Swagger UI](https://swagger.io/) (Express) 
- Authentication with JWT 
- Basic RBAC implementation ( You'll have to attach user object to your request manually ) 
- Basic request time logger

## Setup Guide
**Be aware that** putting **DB_SYNC** to true in your production may result in irreversible data lost.
**DB_SYNC**  should only be put to true in development to skip the necessity of doing migrations.
### Without Docker

- Create .env file with command `cp .env.example .env` and replace with your own env variable
- `yarn install`
- `yarn start` (Your API will be exposed through port 3000)

### With Docker
Run the following scripts for UNIX (Mac,Linux)
```bash
$ cp .env.example .env
$ docker-compose up -d
```
DOS(Windows)
```bash
$ copy .env.example .env
$ docker-compose up -d
```
## Available Services with Docker Container
Once you managed to run the docker container, the following service will be available:
- Nginx will serve as a reverse proxy and will be exposed through port 80 (http://localhost)
- Swagger API Docs (http://localhost/api/docs/)
- Database (Postgres 12) (http://localhost:5432)
- Redis Store (Only Available in internal docker network) (http://0.0.0.0:6379)
- NestJs Server (Only Available in internal docker network) (http://0.0.0.0:3000)
## Migration Guide
New migration with typeorm-cli:
```bash
$ docker exec -it tfd-nest yarn migration:create -n {CreateTable}
```
Migration file will be inside `src/migrations`.
Note that you will have to write migration code inside up and down method on your own.
To generate migration for new database or from the changes in database schema(entities) use:
```bash
$ docker exec -it tfd-nest yarn migration:generate -n {GenerateTable}
```
#### Run Migrations
```bash
$ docker exec -it tfd-nest yarn migration:run
```
#### Revert Migrations
```bash
$ docker exec -it tfd-nest yarn migration:revert
```

## Generate Fixture
Fixture lets you play around with sample data. It's not
recommended generating in production since it may erase real data.
visit [RobinCK/typeorm-fixtures](https://github.com/RobinCK/typeorm-fixtures) for more info.
#### Generate Sample Data 
Make sure the docker container is running
```bash
$ docker exec -it tfd-nest yarn fixture:generate
```
## Donation

Kindly donate to the following bank account (Cambodia) if you want to support our works.

<img src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_560/https://adscom.biz/wp-content/uploads/2017/02/ABA-logo-no-padding.png" width="120" alt="TFD Logo" />

#### KHEANG KIM ANG
#### 001 821 043
You can also donate with **Visa Direct**.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png" width="120" alt="TFD Logo" />

#### 4026 4503 2163 1102

