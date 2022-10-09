import { addProduct, calculateStock, products } from "./product.service";

addProduct({
  name: 'Tommy T-Shirt',
  createdAt: new Date(),
  stock: 23,
  size: 'L'
})

addProduct({
  name: 'Kenneth T-Shirt',
  createdAt: new Date(),
  stock: 5,
  size: 'M'
})

console.log(products);
const totalStock = calculateStock();
console.log(totalStock)
