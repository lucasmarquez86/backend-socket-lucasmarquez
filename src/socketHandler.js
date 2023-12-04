import { Server as socketIO } from 'socket.io';
import products from './products.js';

function connect(server) {
  const io = new socketIO(server);

  io.on('connection', (socket) => {
    console.log('Cliente conectado');

    socket.on('addProduct', (productName) => {
      products.addProduct(productName);
      io.emit('updateProducts', products.getProducts());
    });

    socket.on('disconnect', () => {
      console.log('Cliente desconectado');
    });
  });
}

export default connect;
