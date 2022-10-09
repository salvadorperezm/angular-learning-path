(() => {
  let isEnabled = true;
  isEnabled = false;

  let isNew: boolean;

  const random = Math.random();
  console.log(`random: ${random}`)
  isNew = random > 0.5 ? true : false;
  console.log(`is random greater than 0.5? ${isNew}`);

})();
