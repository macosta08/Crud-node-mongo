const mongoose = require('mongoose');


//Función para conectarse a la base de datos 
const dbConnection = async() => {

    try {

        await mongoose.connect( process.env.MONGODB_CNN, {
        //para conectar mongoose
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
    
        console.log('Base de datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }


}



module.exports = {
    dbConnection
}
