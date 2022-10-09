(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const productOne = createProductToJson('Polo T-Shirt', new Date(), 5, 'M');
  console.log(productOne);

  const createProductToJsonV2 = (title: string, createdAt: Date, stock?: number, size?: Sizes) => ({title, createdAt, stock, size})

  const productTwo = createProductToJsonV2('Penguin T-Shirt', new Date());
  console.log(productTwo)
})();
