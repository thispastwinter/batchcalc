const cocktail = [];
const ratio = [];
const remainderArray = [];

let batchCalc = document.getElementById('batchcalc');

batchCalc.onsubmit = () => {
  event.preventDefault()

  let spirit = document.getElementById('spirit').value;
  let liqueur = document.getElementById('liqueur').value;
  let juice = document.getElementById('juice').value;
  let syrup = document.getElementById('syrup').value;
  let water = document.getElementById('water').value;

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

convertToGallons = (num) => {
  let milliliters = 3785.41 * num;
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