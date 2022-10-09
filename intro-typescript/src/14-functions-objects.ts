(() => {
  // type Login = {email: string, password: string};

  // const login = (data: Login) => {
  //   console.log(`
  //   email: ${data.email},
  //   password: ${data.password}
  //   `);
  // }

  // login({
  //   email: 'salvador@email.com',
  //   password: 'password'
  // });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title: 'Polo T-Shirt',
    createdAt: new Date(),
    stock: 10,

  })

  console.log(products);

})();
