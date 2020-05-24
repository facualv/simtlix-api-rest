# API-REST para operaciones CRUD de Autores y Libros (CURSO SIMTLIX INCLUIT)

API desarrollada para el Practico 2 del taller de Node.js \$ GraphQL

## Stack Tecnológico

- Node.js
- Express.js
- GIT para control de versiones
- Postman para testeo de endpoints

## Verbos HTTP

| HTTP METHOD         | POST              | GET              | PUT           | DELETE        |
| ------------------- | ----------------- | ---------------- | ------------- | ------------- |
| CRUD OP             | CREATE            | READ             | UPDATE        | DELETE        |
| /authors            | Create new author | List All authors | Error         | Error         |
| /authors/:authorsId | Error             | Show authors     | Update author | Delete author |
| /books              | Create new book   | List All books   | Error         | Error         |
| /books/:booksrId    | Error             | Show book        | Update book   | Delete book   |

## Formato de respuesta ante errores

    {
      "status" : 404,
      "message" : "Resource not found"
    }

## API Endpoints

### Libros

#### GET /books

Url: http://localhost:5000/books

Ejemplo de respuesta:

      [
         {
            "id": "1",
            "title": "Eloquent JavaScript, Second Edition",
            "authorId": "Marijn Haverbeke"
         },
         {
            "id": "2",
            "title": "Learning JavaScript Design Patterns",
            "authorId": "Addy Osmani"
         },
         {
            "id": "3",
            "title": "Speaking JavaScript",
            "authorId": "Eric Elliott"
         }
      ]

#### GET /books/[id]

Url: http://localhost:5000/books/[id]

Ejemplo de respuesta:

      {
         "id": "3",
         "title": "Speaking JavaScript",
         "authorId": "Eric Elliott"
      }

#### POST /books/

Url: http://localhost:5000/books

Ejemplo del cuerpo de la peticion:

      {
         "id": "15",
         "title": "Fundamentos Practicos de la Responsabilidad Afectiva",
         "authorId": "Pedro CorazonRoto"
      }

#### PATCH /books/[id]

Url: http://localhost:5000/books/[id]

Ejemplo del cuerpo de la peticion para actualizar el precio:

    {
      "price": 100
    }

#### DELETE /books/[id]

Url: http://localhost:5000/books/[id]

### Autores

#### GET /authors

Url: http://localhost:5000/authors

Ejemplo de respuesta:

      [
         {
            "id": "1",
            "name": "Marijn",
            "lastname": "Haverbeke"
         },
         {
            "id": "2",
            "name": "Addy",
            "lastname": "Osmani"
         },
         {
            "id": "3",
            "name": "Eric",
            "lastname": "Elliott"
         }
      ]

#### GET /authors/[id]

Url: http://localhost:5000/authors/[id]

Ejemplo de respuesta:

      {
         "id": "55",
         "name": "Sofia",
         "lastname": "Gala"
      }

#### POST /authors

Url: http://localhost:5000/authors

Ejemplo del cuerpo de la peticion:

      {
         "id": "8",
         "name": "Peter",
         "lastname": "Pan"
      }

#### PATCH /authors/[id]

Url: http://localhost:5000/authors/[id]

Ejemplo del cuerpo de la peticion para actualizar el precio:

      {
         "name": "Juan",
      }

#### DELETE /orders/[id]

Url: http://localhost:5000/authors/[id]
