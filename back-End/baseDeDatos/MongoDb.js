// Importar Mongoose
const mongoose = require("mongoose");

// Definir los valores de la base de datos
const username = "BDFP";
const password = "cincoIntegrantes";
const key = "6124284289.";
const cosmosPort = 27017;
const Dbname = "posiones_formulario_bd";

// Crear la cadena de conexión
const connectionString = `mongodb://${username}:${password}@${key}:${cosmosPort}/${Dbname}?ssl=true`;

// Conectar con la base de datos usando Mongoose
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS: 45000
});

// Obtener la conexión de Mongoose
const db = mongoose.connection;

// Escuchar el evento open
db.on("open", () => {
  // Mostrar un mensaje de éxito
  console.log("La conexión a la base de datos es exitosa");
});

// Exportar Mongoose
module.exports = mongoose;