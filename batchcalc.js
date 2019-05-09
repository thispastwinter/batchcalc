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

// Make object constructor that feeds each cocktail in and spits out its values into a table

function Cocktail(spirit = 0, liqueur = 0, juice = 0, syrup = 0, water = 0) {
  this.spirit = parseFloat(spirit);
  this.liqueur = parseFloat(liqueur);
  this.juice = parseFloat(juice);
  this.syrup = parseFloat(syrup);
  this.water = parseFloat(water);
}

const remove = (obj) => {
  if (obj.spirit === NaN) {
    obj.spirit === 0;
  }
}

const agroni = new Cocktail(1.5, 1, 1);
console.log(agroni);

const sum = (obj) => {
  var sum = 0;
  for(let el in obj) {
    if(obj.hasOwnProperty(el)) {
      sum += parseFloat(obj[el]);
    }
  }
  return sum;
}

console.log(sum(agroni));


let batchCalc = document.getElementById('batchcalc');

batchCalc.onsubmit = () => {
  event.preventDefault()

  let spirit = batchCalc.elements['spirit'].value;
  let liqueur = batchCalc.elements['liqueur'].value;
  let juice = batchCalc.elements['juice'].value;
  let syrup = batchCalc.elements['syrup'].value;
  let water = batchCalc.elements['water'].value;

  const batchedCocktail = new Cocktail(spirit, liqueur, juice, syrup, water);
  console.log(batchedCocktail);

  let amount = batchCalc.elements['amount'].value;
  let unit = batchCalc.elements['unit'].value;

  switch (unit) {
    case 'gallons':
      convertToGallons(amount, batchedCocktail);
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

// sumArray = (total, num) => {
//   return total + parseFloat(num);
// }

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

// convertToGallons = (num) => {
//   const value = arrayRemove(cocktail, 0);
//   let milliliters = 3785.41 * num;
//   let total = cocktail.reduce(sumArray, 0);

//   for (let i = 0; i < value.length; i++) {
//     let numOfBottles = ((value[i] / total) * milliliters) / 750;
//     let remainder = ((value[i] / total) * milliliters) % 750;
//     ratio.push(Math.floor(numOfBottles));
//     remainderArray.push(remainder.toFixed(0));
//   }

//   let results = document.getElementById('results');
//   let remainingMilliliters = document.getElementById('remainder');

//   results.innerHTML = ratio.join(', ');
//   remainingMilliliters.innerHTML = remainderArray.join(', ');

//   modalTrigger();
// }

convertToGallons = (num, cocktail) => {
  let milliliters = 3785.41 * num;
  let total = sum(cocktail);
  console.log(total);

  let spirit = (cocktail.spirit/total * milliliters).toFixed(2);
  let liqueur = (cocktail.liqueur/total * milliliters).toFixed(2);
  let juice = (cocktail.juice/total * milliliters).toFixed(2);
  let syrup = (cocktail.syrup/total * milliliters).toFixed(2);
  let water = (cocktail.water/total * milliliters).toFixed(2);

  const tdSpirit = document.getElementById('tdSpirit');
  const tdLiqueur = document.getElementById('tdLiqueur');
  const tdJuice = document.getElementById('tdJuice');
  const tdSyrup = document.getElementById('tdSyrup');
  const tdWater = document.getElementById('tdWater');

  tdSpirit.innerHTML = spirit;
  tdLiqueur.innerHTML = liqueur;
  tdJuice.innerHTML = juice;
  tdSyrup.innerHTML = syrup;
  tdWater.innerHTML = water;
  
  modalTrigger();
}