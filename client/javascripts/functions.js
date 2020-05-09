//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

//Req4b
let bitBatBotOrNot = n => {
  //your code goes here
  let result = "";
  if (n % 3 == 0) {
    result = `${result}Bit`;
  }
  if (n % 5 == 0) {
    result = `${result}Bat`;
  }
  if (n % 7 == 0) {
    result = `${result}Bot`;
  }
  if (result == "") {
    result = `${result}Not`;
  }
  return result;
};
console.log(bitBatBotOrNot(17));

//Req4c
let findAllbitBatBotOrNots1 = arr => {
  return arr.map(each => `${each}: ` + bitBatBotOrNot(each));
};
findAllbitBatBotOrNots2([9, 10, 28, 30, 34, 105]);

//Req4d
let findAllbitBatBotOrNots2 = arr => {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + ": " + bitBatBotOrNot(arr));
  }
  return newArr;
};
findAllbitBatBotOrNots2([9, 10, 28, 30, 34, 105]);

//Req4e
let findAllbitBatBotOrNots3 = arr => {
  let result = [];
  for (var each of arr) {
    result.push(each + ": " + bitBatBotOrNot(each));
  }
  return result;
};
findAllbitBatBotOrNots3([9, 10, 28, 30, 34, 105]);

//Req4f
let findAllbitBatBotOrNots4 = arr => {
  arr.forEach(bitBatBotOrNot) => {
    arr[each] + ": " + bitBatBotOrNot(arr[each]);
  });
};

findAllbitBatBotOrNots4([9, 10, 28, 30, 34, 105]);

//XC
findAllbitBatBotOrNotsXC = arr => {
  let ans = [];
  for (each in arr) {
    ans.push(arr[each] + ": " + bitBatBotOrNot(arr[each]));
  }
  return ans;
};
findAllbitBatBotOrNots2([9, 10, 28, 30, 34, 105]);
//test the functions

findAllbitBatBotOrNots1(arrOf1To100);

findAllbitBatBotOrNots2(arrOf1To100);

findAllbitBatBotOrNots3(arrOf1To100);

findAllbitBatBotOrNots4(arrOf1To100);
