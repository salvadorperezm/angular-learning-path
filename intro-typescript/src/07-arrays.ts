(() => {
  let prices = [2, 34, 56, 7, 'World'];
  console.log(`My original array: ${prices}`)
  prices.push('Hello');
  console.log(`My new array: ${prices}`)

  let mixed: (number | string | boolean)[] = ['Hello', 23, true];
  console.log(`My mixed array: ${mixed}`)
})()
