# MongoDB Cheatsheet
***

## Acceso a Mongo
```js
mogosh
```

## Salir de Mongo
```js
exit
```

## Consultar BD
```js
db.getName()
```

## Usar una BD
```js
use DB *nombreBD*
```

## Mostrar colecciones
```js
show collections
```

## Agregar un elemento (sin persistencia)
```js
 var usuario0 = {
    nombre: 'nombre0',
    apellido: 'apellido0',
    edad: 20,
    email: 'email0@mail.com'
}
```

## Agregar un elemento (con persistencia)
```js
 db.usuarios.insertOne({
    nombre: 'nombre1',
    apellido: 'apellido1',
    edad: 21,
    email: 'email1@mail.com'
})
```

## Agregar múltiples elementos (con persistencia)
```js
 db.usuarios.insertMany([
    {
    nombre: 'nombre2',
    apellido: 'apellido2',
    edad: 22,
    email: 'email2@mail.com'
    },
    {
    nombre: 'nombre3',
    apellido: 'apellido3',
    edad: 23,
    email: 'email3@mail.com'
    },
    {
    nombre: 'nombre4',
    apellido: 'apellido4',
    edad: 24,
    email: 'email4@mail.com'
    },
    {
    nombre: 'nombre5',
    apellido: 'apellido5',
    edad: 25,
    email: 'email5@mail.com'
    }
])
```

## Consulta un elemento
```js
db.usuarios.findOne()
```

## Consulta varios elementos
```js
db.usuarios.find()
```

## Formato de consulta
```js
db.usuarios.find().pretty() 
```

## Consulta con filtrado
```js
db.usuarios.find(
    {edad:25}
    ).pretty()
```

## Consulta con Operadores
```js
db.users.find(
    {
        age:{
            $eq: 21
        }
    }
).pretty()
```

## Operadores
```js
$gt > mayor que 
$lt > menor que

$gte >= mayor o igual que
$lte > menor o igual que

$eq = igual
$ne != different
```
