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

## Agregar un elemento o documento (sin persistencia)
```js
 var usuario0 = {
    nombre: 'nombre0',
    apellido: 'apellido0',
    edad: 20,
    email: 'email0@mail.com',
    fecha_creacion: new Date()
}

```
## Persistir el elemento o documento anterior
```js
db.usuarios.insert(usuario0)
```

## Agregar un elemento (con persistencia)
```js
 db.usuarios.insertOne({
    nombre: 'nombre1',
    apellido: 'apellido1',
    edad: 21,
    email: 'email1@mail.com',
    fecha_creacion: new Date()
})
```

## Agregar múltiples elementos (con persistencia)
```js
 db.usuarios.insertMany([
    {
    nombre: 'nombre2',
    apellido: 'apellido2',
    edad: 22,
    email: 'email2@mail.com',
    fecha_creacion: new Date()
    },
    {
    nombre: 'nombre3',
    apellido: 'apellido3',
    edad: 23,
    email: 'email3@mail.com',
    fecha_creacion: new Date()
    },
    {
    nombre: 'nombre4',
    apellido: 'apellido4',
    edad: 24,
    email: 'email4@mail.com',
    fecha_creacion: new Date()
    },
    {
    nombre: 'nombre5',
    apellido: 'apellido5',
    edad: 25,
    email: 'email5@mail.com',
    fecha_creacion: new Date()
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
```js
## Saltar y Limitar los elementos de la consulta
db.usuarios.find().skip(2).limit(3)
```
## Operadores de Consulta
```js
$gt > mayor que 
$lt > menor que

$gte >= mayor o igual que
$lte > menor o igual que

$eq = igual
$ne != different
```

## Consulta con Operadores
```js
db.usuarios.find(
    {
        edad:{
            $eq: 21
        }
    }
).pretty()
```

## Operadores Lógicos
```js
$and - y
$or  - o
$not - no
$nor - ni

```

## Consulta and
```js
db.usuarios.find(
    {
        $and:
            [
               {
                edad:{$gt:20}
               },
               {
                edad:{$lt:26}
               }
            ]
    }
).pretty()
```

## Consulta or
```js
db.usuaios.find(
    {
        $or:
            [
               {
                edad:{$lt:20}
               },
               {
                edad:{$gte:25}
               }
            ]
    }
).pretty()
```

## Expresión Regular (Regex)
```js
//Inicia
db.usuarios.find(
    {
        nombre:/^nombre/
    }
).pretty()

//Finaliza
db.usuarios.find(
    {
        nombre:/$1/
    }
).pretty()

//A la mitad
db.usuarios.find(
    {
        nombre:/e2/
    }
).pretty()

```
## Consulta un Array
```js
db.usuarios.find(
    {
        $or:
            [
               {
                nombre:'nombre0'
               },
               {
                nombre:'nombre1'
               }
            ]
    }
).pretty()

db.usuarios.find(
    {
        nombre:
               {
                $nin:['nombre0', 'nombre1']
               }
    }
).pretty()

```
## Consulta por atributos
```js
db.usuarios.find(
    {
        edad:{
            $exists: true
        }
    }
).pretty()

```
## Actualizar el atributo de un documento con findOne
```js
var nombre6 = db.usuarios.findOne(
    {nombre: 'nombre0'}
)

nombre6.fecha_creacion = new Date()

db.usuarios.replaceOne(nombre6)
```
## Actualizar un documento
```js
db.usuarios.updateOne(
    {
        nombre: 'nombre0'
    },
    {
        $set: {
            edad: 21
        }
    } 
)
```
## Actualizar multiples documentos
```js
db.usuarios.updateMany(
    {
        edad: {
            $exists: true
        }
    },
    {
        $set: {
            edad: 22
        }
    } 
)
```
## Eliminar atributos
```js
db.usuarios.updateOne(
    {
        nombre: 'nombre5'
    },
    {
        $unset: {'fecha_creacion': true}
    } 
)
```
## Incrementar el valor de un atributo
```js
db.usuarios.updateOne(
    {
        nombre: 'nombre5'
    },
    {
        $inc: {
            edad: 1
        }
    } 
)
```
## Actualizar un atributo exista o no
```js
db.usuarios.updateOne(
    {
        nombre: 'nombre6'
    },
    {
        $set: {
            edad: 25
        }
    }, 
    {
        upsert: true
    }
)
```
## Borrar documentos
```js
db.usuarios.remove(
    {
        nombre: 'nombre6'
    }
)
```
## Borrar todo
```js
db.usuarios.remove({})
```
## Borrar la BD
```js
db.dropDatabase()
```
## Borrar una colección
```js
db.usuarios.drop()
```
## Contar el Número de Documentos dentro la colección
```js
db.usuarios.countDocuments()
```





