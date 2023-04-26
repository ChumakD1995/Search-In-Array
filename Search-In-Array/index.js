let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sum = 0; 
let positiveCount = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sum += arr[i];
    positiveCount++;
  }
}

console.log ("Сума позитивних елементів: " + sum);
console.log ("Кількість позитивних елементів: " + positiveCount)

let min = arr[0];
let minIndex = 0;
for (i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i]; 
    minIndex = i;
  }
}

console.log ("Мінімальний елемент масиву: " + min);
console.log ("Порядковий номер мінімального елементу масиву: " + minIndex);

let max = arr[0];
let maxIndex = 0;
for (i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    maxIndex = i;
  }
}

console.log ("Максимальний елемент масиву: " + max);
console.log ("Порядковий номер максимального елементу масиву: " + maxIndex);

let countNegative = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    countNegative++;
  }
}

console.log ("Кількість негативних елементів: " + countNegative);

let productPositive = 1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    productPositive *= arr[i];
  }
}

console.log ("Добуток позитивних елементів: " + productPositive);