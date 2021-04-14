/**
 * Tomando como datasource data/users.json
 * 1. Desarrollar una API REST con los endpoints que permita:
 *      1.1. Listar todos los usuarios 
 *      1.2. Devuelva un usuario por ID, por ejemplo /api/users/4 devuelve el usuario cuyo id es 4:
 *      1.3. Inserte el siguiente user y retorne el listado de todos
 * {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
 *
 */

const users = require('./data/users.json');
const express = require('express');
const fs = require('fs');

const app = express();



app.use(express.json());

app.get('/api/users', (req, res) => {
  res.send(users);
}) 

app.get('/api/users/:id', (req, res) => {
  let user = users[req.params.id-1];

  if (user) {
    res.send(user);
  } else {
    res.status(404).send("Usuario no encontrado");
  }

}) 

app.post('/api/user', (req, res) => {

  if (!req.body || !req.body.id) {
    res.status(400).send("El usuario enviado no es correcto");
    return;
  } 

  let user = users.filter( (usr) => usr.id == req.body.id);

  if (user.length != 0) {
    res.status(400).send("El id ya fue utilizado por otro usuario");
    return;
  }

  users[users.length] = req.body;
  users.sort( (usr1, usr2) => usr1.id - usr2.id);

  res.send("Usuario agregado correctamente");
})

app.put('/api/users/save', (req, res) => {
  users.sort( (usr1, usr2) => usr1.id - usr2.id);

  fs.writeFile('./data/users.json', JSON.stringify(users, null, 2), (err, result) => {
    if (err) {
      console.log('Cannot save the users file: ', err);
      res.status(500).send('Error al guardar el archivo');
      return;
    }

    res.send('Usuarios guardados correctamente');
  });


})

app.listen(3000, () => {
  console.log("El servidor esta inicializado.");
})