function multiply(
  num1: string | number | null,
  num2: string | number | null
): number | void {
  const convertedNum1 = typeof num1 == "string" ? parseInt(num1) : num1;
  const convertedNum2 = typeof num2 == "string" ? parseInt(num2) : num2;

  if (typeof convertedNum1 == "number" && typeof convertedNum2 == "number") {
    return convertedNum1 * convertedNum2;
  }

  return console.log("não é possivel multiplicar estes números!");
}

function sum(
  num1: string | number | null,
  num2: string | number | null
): number | void {
  const convertedNum1 = typeof num1 == "string" ? parseInt(num1) : num1;
  const convertedNum2 = typeof num2 == "string" ? parseInt(num2) : num2;

  if (typeof convertedNum1 == "number" && typeof convertedNum2 == "number") {
    return convertedNum1 + convertedNum2;
  }

  return console.log("não é possivel somar estes números!");
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}

function showResult(result: number | void): void {
  if (typeof result != "number") {
    return console.log(result);
  }

  if (isEven(result)) {
    console.log(`The result is ${result} and it's even!`);
  } else {
    console.log(`The result is ${result} and it's even!`);
  }
}

(() => {
  const num1 = prompt("First Number");
  const num2 = prompt("Second Number");

  let result = sum(num1, num2);
  let result2 = multiply(1, 2);

  if (typeof result === "number" && typeof result2 === "number") {
    result += result2;
  }
  showResult(result);
})();
