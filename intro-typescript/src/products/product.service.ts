import { Product } from "./product.model";

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  products.push(data);
}

export const calculateStock = ():number => {
  let total = 0;
  products.forEach((item) => {
    total += item.stock;
  });
  return total;
}
