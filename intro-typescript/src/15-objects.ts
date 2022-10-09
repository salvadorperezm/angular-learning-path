(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct(
    {
      title: 'Polo T-Shirt',
      createdAt: new Date(),
      stock: 10,
      size: 'L'
    }
  )

  addProduct(
    {
      title: 'Penguin T-Shirt',
      createdAt: new Date(),
      stock: 23
    }
  )

  console.log(products);
})();
