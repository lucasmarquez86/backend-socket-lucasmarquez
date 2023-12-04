// server.js
import express from 'express';
import exphbs from 'express-handlebars';
import http from 'http';
import socketHandler from './socketHandler.js'; 
import viewsRouter from './routes/viewsRouter.js';

const app = express();
const server = http.createServer(app);

// Configurar el motor de plantillas Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// Configurar rutas utilizando el router de vistas
app.use('/', viewsRouter);

// Conectar WebSocket
socketHandler(server);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
