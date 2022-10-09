(() => {
  let myNumber: number | null;
  myNumber = 23;

  let myString: string | undefined;
  myString = 'Salvador';

  function hi(value: string | null) {
    typeof value === 'string' ? console.log(`Hello ${value}`) : console.log('Hello nobody');
  }

  function hiV2(value: string | null) {
    let hello = 'Hello';
    hello += value?.toLowerCase() || 'Nobody';
    console.log(hello);
  }

  hiV2('Salvador');
})();
