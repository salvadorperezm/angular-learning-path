(() => {
  // creating our own type
  type UserID = string | number;

  function captureData(id: UserID) {
    typeof id === 'string' ? console.log('Your id is a string') : console.log('Your id is a number')
  }

  captureData(2314124);
  captureData('Hello World');

  // literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL'

  function sizeOfShirt(size: Sizes) {
    console.log(`Your shirt size is: ${size}`)
  }

  sizeOfShirt('M');

})();
