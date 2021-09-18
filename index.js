const store = [
  { item: "apple", type: "Fuji", weight: 10, pricePerKilo: "$3" },
  { item: "orange", type: "Clementine", weight: 6, pricePerKilo: "$7" },
  { item: "watermelon", type: "Nova", quantity: 1, pricePerItem: "$5" },
  { item: "orange", type: "Navel", weight: 6, pricePerKilo: "$7" },
  { item: "pineapple", type: "Queen", quantity: 4, pricePerItem: "$15" },
  { item: "pineapple", type: "Pernambuco", quantity: 3, pricePerItem: "$12" },
  { item: "apple", type: "Cameo", weight: 6, pricePerKilo: "$7" },
  { item: "watermelon", type: "Trio", quantity: 2, pricePerItem: "$9" },
  { item: "pineapple",type: "Red Spanish",quantity: 3,pricePerItem: "$9,99"},
  { item: "watermelon", type: "Millionaire", quantity: 2, pricePerItem: "$7" },
  { item: "orange", type: "Tangerine", weight: 4, pricePerKilo: "$4,99" },
  { item: "apple", type: "Jazz", weight: 4, pricePerKilo: "$5" },
];

function calculateProducts(products) {
const fruitCost = { apple: 0, orange: 0, pineapple: 0, watermelon: 0 };
const fruitData = { weight: 0, quantity: 0}

let flag = true
products.forEach(function(element){
  const price = element.pricePerKilo || element.pricePerItem;
  const weiqua = element.weight || element.quantity
  if(typeof element.item !== 'string') {
flag = false
}
  if(typeof weiqua !== 'number') {
flag = false
}
  if(typeof element.type !== 'string') {
flag = false
}
  if(typeof weiqua !== 'number') {
flag = false
}
  if(typeof price !== 'string' || price[0] !== '$') {
flag = false
}
})
  if (flag == false){
  return 'Validation faild'
}
  console.log('Validation passed:',flag);

 products.forEach(function (prod) {
    if (prod.item == "apple") fruitData.weight += prod.weight;
    if (prod.item == "watermelon") fruitData.quantity += prod.quantity;
  });
  console.log(`Watermelon - ${fruitData.quantity}`);

  console.log(`Apples - ${fruitData.weight}`);

 /* let filterByWatermelon = products.filter(function (item) {
    return item.item == "watermelon";
  });

  let sumWatermelon = filterByWatermelon.reduce(
    (sum, current) => sum + current.quantity,
    0
  );

  console.log(`Watermelon - ${sumWatermelon}`);

    let filterByApples = products.filter(function (item) {
    return item.item == "apple";
  });

  let sumApples = filterByApples.reduce(
    (sum, current) => sum + current.weight,
    0
  );

  console.log(`Apples - ${sumApples}`);
*/
 /* const sortedByABC = products.sort(function (a, b) {
    let itA = a.item;
    let itB = b.item;
    if (itA < itB) return -1;
    else if (itA > itB) return 1;
    return 0;*/
//const sortedByABC = products.sort((a,b) => (a.item > b.item) ? 1 : ((b.item > a.item) ? -1 : 0)); 
 const sortedByABC = products.sort(function(a, b)  {a.item.localeCompare(b.item)});

  console.log("Sorted by alphabet");
  console.log(sortedByABC);

  let sortByPrice = products.sort(function (a, b) {
    let priceA = a.pricePerKilo || a.pricePerItem;
    let priceB = b.pricePerKilo || b.pricePerItem;

    priceA = +priceA.replace(",", ".").slice(1);
    priceB = +priceB.replace(",", ".").slice(1);

 return priceA - priceB;
  });

  console.log("Sorted by cost");
  console.log(sortByPrice);

  const chipOr = products.filter(function (item) {
    return item.item == "orange";
  }).sort(function (a, b) {
    let priceA = +a.pricePerKilo.replace(",", ".").slice(1);
    let priceB = +b.pricePerKilo.replace(",", ".").slice(1);
   return priceA - priceB;
  })[0];
  console.log(`The cheapest orange type is: ${chipOr.type} - ${chipOr.pricePerKilo}`)

  /*let filterByOrange = products.filter(function (item) {
    return item.item == "orange";
  });

  let sortedByOrange = filterByOrange.sort(function (a, b) {
    let priceA = +a.pricePerKilo.replace(",", ".").slice(1);
    let priceB = +b.pricePerKilo.replace(",", ".").slice(1);
   return priceA - priceB;
  });

  console.log(
    `The cheapest orange type is: ${sortedByOrange[0].type} ` +
      sortedByOrange[0].pricePerKilo
  );*/

  

  products.forEach(function (fruit) {
    let price = fruit.pricePerKilo || fruit.pricePerItem;
    price = +price.replace(",", ".").slice(1);

    const weiqua = fruit.weight || fruit.quantity;

    if (fruit.item == "apple") fruitCost.apple += price * weiqua;
    if (fruit.item == "orange") fruitCost.orange += price * weiqua;
    if (fruit.item == "pineapple") fruitCost.pineapple += price * weiqua;
    if (fruit.item == "watermelon") fruitCost.watermelon += price * weiqua;
  });

  console.log(`Apples - ${fruitCost.apple.toFixed(2)}$`);
  console.log(`Orange - ${fruitCost.orange.toFixed(2)}$`);
  console.log(`Pineapple - ${fruitCost.pineapple.toFixed(2)}$`);
  console.log(`Watermelon - ${fruitCost.watermelon.toFixed(2)}$`);

  return (
    fruitCost.apple +
    fruitCost.orange +
    fruitCost.pineapple +
    fruitCost.watermelon
  );
}

console.log(calculateProducts(store));

/*function isNumber(number){
  return typeof number == 'number';
}
console.log((isNumber));
function isString(item){
  return typeof item == 'string';
}
console.log((isString));
    */    
