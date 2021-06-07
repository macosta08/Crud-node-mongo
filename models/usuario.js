
const { Schema, model } = require('mongoose');
// object de base de datos llamado MODELO  
const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true // son unicos (no repetidos)
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']  //tipos de roles permitidos
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
});



UsuarioSchema.methods.toJSON = function() {
    const { __v, password, ...usuario  } = this.toObject();
    return usuario;
}


// se exporta model y se le coloca el nombre a la colección (Usuario) ** mongo le añade S al final **
// como segundo parametro el esquema creado. 
module.exports = model( 'Usuario', UsuarioSchema );
