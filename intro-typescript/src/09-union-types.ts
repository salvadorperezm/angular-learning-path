(() => {
  let myDynamicValue: number | string;
  myDynamicValue = 'Hello World';
  console.log(`My value as string is: ${myDynamicValue}`);
  myDynamicValue = 23;
  console.log(`My vale as number: ${myDynamicValue}`);

  // this will activate ts type error
  // myDynamicValue = false;

  function capturingData(value: number | string) {
    typeof value === 'string' ? console.log(`${value} is a string`) : console.log(`${value} is a number`);
  }

  capturingData('Hello World');
  capturingData(23);
})();
