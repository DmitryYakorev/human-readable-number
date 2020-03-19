const ordinaries = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
];
const tys = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
];
const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
];

module.exports = function toReadable (number) {
    if (number === 0) return 'zero';
    if (number > 99) {
        t = `${ordinaries[Math.floor(number / 100)]} hundred ${chance(number % 100)}`.trim();
        console.log(t);
        return t;}
    else return chance(number);
};

function chance(number) {
    if (number < 10) return ordinaries[number];
    else if (number >= 10 && number < 20) return teens[number - 10];
    else return `${tys[Math.floor(number / 10)]} ${ordinaries[number % 10]}`.trim(); 
}
