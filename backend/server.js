
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());

// Rate limiting: máximo 50 solicitudes por IP cada 15 minutos
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 50, // límite de solicitudes por IP
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(limiter);

//conexión a mongoDB
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DB}?retryWrites=true&w=majority`;
// const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DB}`;

// console.log(uri);

// Conexión a MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexión a MongoDB exitosa'))
    .catch(err => console.error('Error de conexión a MongoDB:', err));


//Rutas
const canchasRoutes = require('./routes/canchas');
const regionesRoutes = require('./routes/regiones');
const tiposCanchaRoutes = require('./routes/tiposCancha');
const usuariosRoutes = require('./routes/usuarios');

app.use('/api/canchas', canchasRoutes);
app.use('/api/regiones', regionesRoutes);
app.use('/api/tiposcancha', tiposCanchaRoutes);
app.use('/api/usuarios', usuariosRoutes);


// Puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
