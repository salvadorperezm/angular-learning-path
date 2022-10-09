(() => {
  const calculateTotal = (prices: number[]): number => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    })
    return total

  }

  const captureData = (prices: number[]): void => {
    console.log(calculateTotal(prices));
  }

  captureData([23, 14, 45]);

})();
