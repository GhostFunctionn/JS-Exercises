//1. SIMPLE FUNCTION
greeting = () => {
  console.log("Hello world.");
};

greeting();

//2. QUADRUPLER
quadrupler = (num) => {
  return num * 4;
};

console.log(quadrupler(4));

//3. WELCOME MESSAGE
welcome = (firstName, lastName) => {
  return `Hello ${firstName.toLowerCase()} ${lastName.toUpperCase()}, how can I help you?`;
};

console.log(welcome("Justin", "Humphreys"));

//4. TEMPERATURE CONVERTER
temperatureConverter = (tempF) => {
  let tempC = ((tempF - 32) * 5) / 9;
  return tempC;
};

console.log(temperatureConverter(50));

//5. DOG YEARS
dogYears = (firstName, age) => {
  let dogYearsAge = (age - 2) * 5 + 15 + 9;
  console.log(
    `Hi, ${firstName}, you are ${age} but in dog years that's ${dogYearsAge}.`
  );
};
dogYears("Justin", 28);

//6. CALCULATOR
calculator = (num1, operator, num2) => {
  if ((num1 || num2) !== typeof "number") {
    console.log("Please input two numbers.");
  } else if (operator != ("+" || "/" || "*" || "-")) {
    console.log("Please use a valid operator.");
  } else {
    if (operator === "+") {
      return num1 + num2;
    } else if (operator === "/") {
      return num1 / num2;
    } else if (operator === "*") {
      console.log(num1 * num2);
    } else if (operator === "-") {
      return num1 - num2;
    }
  }
};

console.log(calculator(9, "*", 9));

//.7 LESS THAN
min = (a, b) => {
  if (a > b) {
    return b;
  } else if (b > a) {
    return a;
  } else {
    console.log("The numbers are equal.");
  }
};

console.log(min(9, 10));
console.log(min(100, 90));
min(50, 50);

//. TO THE POWER OF
pow = (first, second) => {
  return first ** second;
};

console.log(pow(2, 3));
