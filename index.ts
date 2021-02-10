//1. to check if the entered year is leap or not

let year: number;
year = prompt("enter an year to check if it is a leap year");
let checkLeapYear = (year): boolean => {
  if (year % 100 === 0) {
    return year % 400 === 0 ? true : false;
  } else {
    return year % 4 === 0 ? true : false;
  }
};
console.log(checkLeapYear(year));

//2.reversing string
let str: string;
str = prompt("Enter a string to reverse");
let reverseString = (str): string => {
  return str.split("").reverse().join("");
};
console.log(reverseString(str));
