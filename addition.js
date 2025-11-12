let arrNum = [5, 6, 7, 4, 1, 10];

function Addition(arrNumber) {
  let result = 0;

  for (let a = 0; a < arrNumber.length; a++) {
    result += arrNumber[a];
  }
  return result;
}

console.log(Addition(arrNum));
