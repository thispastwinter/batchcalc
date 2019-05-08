const cocktail = [];
const ratio = [];
const remainderArray = [];

const resultsModal = document.querySelector('.modal');

modalTrigger = () => {
  const instance = M.Modal.init(resultsModal);
  instance.open();
}

arrayRemove = (arr, value) => {
  return arr.filter(function (ele) {
    return ele != value;
  });
}

let batchCalc = document.getElementById('batchcalc');

batchCalc.onsubmit = () => {
  event.preventDefault()

  let spirit = batchCalc.elements['spirit'].value;
  let liqueur = batchCalc.elements['liqueur'].value;
  let juice = batchCalc.elements['juice'].value;
  let syrup = batchCalc.elements['syrup'].value;
  let water = batchCalc.elements['water'].value;

  cocktail.push(spirit, liqueur, juice, syrup, water);
  let amount = batchCalc.elements['amount'].value;
  let unit = batchCalc.elements['unit'].value;

  switch (unit) {
    case 'gallons':
      convertToGallons(amount);
      break;
    case 'liters':
      convertToLiters(amount);
      break;
    case 'milliliters':
      convertToMilliliters(amount);
      break;
    case 'ounces':
      convertToOunces(amount);
      break;
  }
};

sumArray = (total, num) => {
  return total + parseFloat(num);
}

convertToMilliliters = (num) => {
  let milliliters = 0.033814 / num;
  let total = cocktail.reduce(sumArray, 0);

  for (let i = 0; i < 5; i++) {
    let numOfBottles = ((cocktail[i] / total) * milliliters) / 750;
    let remainder = ((cocktail[i] / total) * milliliters) % 750;
    ratio.push(Math.floor(numOfBottles));
    remainderArray.push(remainder.toFixed(0));
  }

  let results = document.getElementById('results');
  let remainingMilliliters = document.getElementById('remainder');

  results.innerHTML = ratio.join(', ');
  remainingMilliliters.innerHTML = remainderArray.join(', ');
}

convertToLiters = (num) => {
  let milliliters = 1000 * num;
  let total = cocktail.reduce(sumArray, 0);

  for (let i = 0; i < 5; i++) {
    let numOfBottles = ((cocktail[i] / total) * milliliters) / 750;
    let remainder = ((cocktail[i] / total) * milliliters) % 750;
    ratio.push(Math.floor(numOfBottles));
    remainderArray.push(remainder.toFixed(0));

  }

  let results = document.getElementById('results');
  let remainingMilliliters = document.getElementById('remainder');

  results.innerHTML = ratio.join(', ');
  remainingMilliliters.innerHTML = remainderArray.join(', ');
}

convertToOunces = (num) => {

}

// Within this function I need each item from each array written to a table

convertToGallons = (num) => {
  const value = arrayRemove(cocktail, 0);
  let milliliters = 3785.41 * num;
  let total = cocktail.reduce(sumArray, 0);

  for (let i = 0; i < value.length; i++) {
    let numOfBottles = ((value[i] / total) * milliliters) / 750;
    let remainder = ((value[i] / total) * milliliters) % 750;
    ratio.push(Math.floor(numOfBottles));
    remainderArray.push(remainder.toFixed(0));
  }

  let results = document.getElementById('results');
  let remainingMilliliters = document.getElementById('remainder');

  results.innerHTML = ratio.join(', ');
  remainingMilliliters.innerHTML = remainderArray.join(', ');

  modalTrigger();
}

