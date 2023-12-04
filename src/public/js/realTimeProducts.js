import io from '/socket.io/socket.io.js';

const socket = io();

document.getElementById('product-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const productName = document.getElementById('product-name').value;
  socket.emit('addProduct', productName);
  document.getElementById('product-name').value = ''; // Limpiar el campo después de agregar el producto
});

socket.on('updateProducts', (products) => {
  const productList = document.getElementById('product-list');
  productList.innerHTML = products.map(product => `<li>${product}</li>`).join('');
});
