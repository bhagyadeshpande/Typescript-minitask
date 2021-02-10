//1. to check if the entered year is leap or not
var year;
year = prompt("enter an year to check if it is a leap year");
var checkLeapYear = function (year) {
    if (year % 100 === 0) {
        return year % 400 === 0 ? true : false;
    }
    else {
        return year % 4 === 0 ? true : false;
    }
};
console.log(checkLeapYear(year));
//2.reversing string
var str;
str = prompt("Enter a string to reverse");
var reverseString = function (str) {
    return str.split("").reverse().join("");
};
console.log(reverseString(str));
