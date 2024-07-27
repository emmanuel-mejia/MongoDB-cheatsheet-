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
## Saltar y Limitar los elementos de la consulta
```js
db.usuarios.find().skip(2).limit(3)
```
## Ordenar por nombre en forma Descendente
```js
db.usuarios.find().sort({
    name: -1
})
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
db.users.find(
    {
        $and:
            [
               {
                age:{$gt:20}
               },
               {
                age:{$lt:26}
               }
            ]
    }
).pretty()
```

## Consulta or
```js
db.users.find(
    {
        $or:
            [
               {
                age:{$lt:20}
               },
               {
                age:{$gte:25}
               }
            ]
    }
).pretty()
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
## Encuentra y Modifica un documento con incremento
```js
db.usuarios.findAndModify(
    {
        query:{
            nombre: 'nombre6'
        },
        update: {
            $inc:{
                edad: 1
            }
        }
    }
)
```
## Renombrar atributos de la colección
```js
db.usuarios.updateMany(
    {},
    {
        $rename: {
            fecha_creacion: 'fec_creacion'
        }
    }
)
```
## Actualizar con una lista
```js
db.usuarios.updateOne({nombre: 'nombre6'},{$set: {pasatiempos: ['Leer','Correr','Cocinar']}})
```
## Buscar un elemento dentro de la lista
```js
db.usuarios.findOne(
    {
        pasatiempos: {
            $eq: ['Leer','Pasear'] //El orden es importante
        }
    }
)
```
## Buscar un elemento dentro de la lista, el operador all se usa como and
```js
db.usuarios.find(
    {
        pasatiempos: {
            $all: ['Aprender','Cocinar']
        }
    }
).pretty()
```
## Multiples condiciones en una lista and, or
```js
db.usuarios.find(
    {$and: 
        [{pasatiempos: 'Leer'},{pasatiempos: 'Cocinas'}]
    })

db.usuarios.find(
    {$or: 
        [{pasatiempos: 'Correr'},{pasatiempos: 'Aprender un idioma'}]
    })
```
## Insertar elementos en una lista
```js
db.usuarios.updateOne(
    {nombre:'nombre0'},
    {$push:{pasatiempos:'Escribir'}}
)
```
## Insertar varios elementos en una lista
```js
db.usuarios.updateOne(
    {nombre:'nombre1'},
    {$push:{
        pasatiempos:{
            $each:['Programar','Cine']
        }}
    }
)
```
## Insertar elementos en la posición 1
```js
db.usuarios.updateOne
({nombre:'nombre6'},
    {$push:{pasatiempors:
        {$each:['Viajar','Sports'],$position:1,}
    }
})
```
## Ordernar elementos de forma descendente
```js
db.usuarios.updateOne(
    {nombre:'nombre5'},
    {$push:{
        diasPasamiento:{
            $each: [5,4],$sort:-1
        }
    }
})
```
##  Eliminar valores en la lista de elementos
```js
db.usuarios.updateMany(
    {pasatiempos:{ $exists:true}},
    {$pull:{pasatiempos:'Escribir'}}
)
```
##  Actualizar un índice
```js
db.usuarios.updateMany(
    {diasPasamiento:
        { $exists:true}},{$set:{'diasPasamiento.1':0}}
)
```
##  Obtener indices del 0 al 3
```js
db.usuarios.find(
    {nombre:{$in:['nombre0','nombre5']}},
    {_id:false,nombre:true,pasatiempos:{$slice:[0,3]}}
).pretty()
```
## Buscar elementos con almenos 2 pasatiempos - gt greate than
```js
db.usuarios.find(
    {pasatiempos:{
        $size:{$gt:2}
    }}
).pretty()
```
## Salvar Documentos dentro de documentos
```js
db.usuarios.updateOne(
    {nombre:'nombre0'},
    {$set:{direccion:{estado: 'Baja California', ciudad:'Los Cabos',  calle: 'Park Av', CP:05890}}
})
```
## Obtener todos los usuarios con una dirección
```js
db.usuarios.find(
    {direccion:{$exists:true}}
)
```
## 
```js
```
## 
```js
```
## 
```js
```
## 
```js
```
