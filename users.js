
db.usuarios.insertOne({
    nombre: 'nombre1',
    apellido: 'apellido1',
    edad: 21,
    email: 'email1@mail.com'
});

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
]);

db.usuarios.findOne();

db.usuarios.find();

db.usuarios.find().pretty();

db.usuarios.find(
    {edad:25}
    ).pretty();

db.v.find(
    {
        edad:{
            $eq: 21
        }
    }
).pretty();
