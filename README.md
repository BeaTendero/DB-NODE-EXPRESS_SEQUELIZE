# Express API Sequelize + Mysql + jwt + Rol

<br>

![image](https://user-images.githubusercontent.com/16636086/138780246-dc69ba86-c111-42e6-8079-35ffeba723f9.png)

## COMANDOS BÁSICOS

```
npm init
npm install
npm update
npm run dev
npm run start

npm install cors jsonwebtoken bcrypt
sequelize model:generate --name user --attributes name:string, password:string, email:string
sequelize db:create
sequelize db:migrate

sequelize db:migrate:undo
sequelize db:migrate:undo:all

sequelize seed:generate --name demo-user
sequelize db:seed:all
sequelize db:seed:undo
sequelize db:seed:undo:all
```

## END-POINTS

```

#### Register
POST - localhost:3008/api/signup - { "name": "root", "email": "root@email.com",  "password": "password" }

#### Login
POST - localhost:3008/api/signin - { "email": "root@email.com",  "password": "password" }

#### Home
GET - localhost:3008

#### Movies

GET /movies--> Muestra todas las películas.
GET /movies/id/:id --> Muestra una película buscando por su Id.
GET /movies/title/:title --> Muestra una película buscando por su título.
POST /movies--> Registra una nueva película (Solo acceso como Administrador).
DELETE /movies/:id--> Elimina una pelicula mediante su Id (Solo acceso como Administrador).
DELETE /movies/deleteAll--> Elimina todas las películas (Solo acceso como Administrador).

### Géneros

GET/géneros --> Muestra todos los géneros.
POST /genres --> Crea un nuevo genero (Solo acceso como Administrador).
DELETE /genres --> Elimina todos los generos (Solo acceso como Administrador).
DELETE /genres/:id --> Elimina un genero mediante su Id (Solo acceso como Administrador).

### GéneroPelícula

GET/genreMovie --> Muestra todos los géneros asignados a películas.
POST/genreMovie --> Crea una nueva estimación de género a película (Solo acceso como Administrador).
DELETE/genreMovie/:id --> Elimina una visualización de género mediante su Id (Solo acceso como Administrador).
DELETE/genreMovie --> Elimina todas las asignaciones de géneros (Solo acceso como Administrador).

#### Categories

GET - localhost:3008/categories
GET - localhost:3008/categories/:id
GET - localhost:3008/categories/name/:title
POST - localhost:3008/categories
PUT - localhost:3008/categories:id
DELETE - localhost:3008/categories
DELETE - localhost:3008/categories:id

#### Loans

Préstamo de una película : petición POST loans que permite al usuario prestar una película de la base de datos. 

Prestar un programa : petición POST loans que permite al usuario prestar un programa de la base de datos.



Relación de modelos