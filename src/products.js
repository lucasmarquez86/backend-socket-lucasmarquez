let productList = ['Producto1', 'Producto2', 'Producto3'];

function addProduct(productName) {
  productList.push(productName);
}

function getProducts() {
  return productList;
}

export { addProduct, getProducts as default };
