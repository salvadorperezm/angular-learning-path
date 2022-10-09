(() => {
  let dynamicValue: any;
  dynamicValue = 23;
  console.log(`Dynamic variable es number: ${dynamicValue}`);
  dynamicValue = '50';
  console.log(`Dynamic variable as string: ${dynamicValue}`);

  const rta = (<number>dynamicValue).toFixed();
  console.log(`My rta value: ${rta}`)
})();
