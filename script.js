// Inch To Feet
const inchToFeet = () => {
    const inch = document.getElementById('inch-input').value;
    document.getElementById('inch-error').innerText = '';
    document.getElementById('inch-result').classList.add('d-none')
    if (inch < 0) {
        document.getElementById('inch-error').innerText = `Inch can't be negative!`;
    }
    else if (inch === '') {
        document.getElementById('inch-error').innerText = 'Please enter your inch!';
    }
    else {
        const feet = inch / 12;
        document.getElementById('inch').innerText = inch;
        document.getElementById('feet').innerText = feet;
        document.getElementById('inch-result').classList.remove('d-none');
    }
}

const copyText = (id) => {
    const copyText = document.getElementById(id).innerText;
    let element = document.createElement('textarea');
    document.body.appendChild(element);
    element.value = copyText;
    element.select();
    document.execCommand('copy');
    document.body.removeChild(element);
}
  

// Check whether a year is a Leap Year or not
const checkLeapYear = () => {
    const year = document.getElementById('year-input').value;
    const showMessage = document.getElementById('leap-year');
    document.getElementById('year-error').innerText = '';
    document.getElementById('leap-year-result').classList.add('d-none');

    if (year === '') {
        document.getElementById('year-error').innerText = 'Please enter a year!';
    }
    else if (year < 1582) {
        document.getElementById('year-error').innerText = 'Please enter a year < 1582!';
    }
    //three conditions to find out the leap year
    else if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        showMessage.innerText = year + ' is a Leap Year';
        document.getElementById('leap-year-result').classList.remove('d-none');
    }
    else {
        showMessage.innerText = year + ' is not a Leap Year';
        document.getElementById('leap-year-result').classList.remove('d-none');
    }
}

// Calculate Factorial
const factorial = () => {
    const n = document.getElementById('factorial-input').value;
    document.getElementById('factorial-result').classList.add('d-none');
    document.getElementById('factorial-error').innerText = '';
    
    if (n === '') {
        document.getElementById('factorial-error').innerText = 'Please enter a number!';
    }
    else if (n < 0) {
        document.getElementById('factorial-error').innerText = 'Please enter a positive number!';
    }
    else {
        let factorialNum = 1;
        for (let i = 1; i <= n; i++) {
            factorialNum = factorialNum * i;
        }
        document.getElementById('factorial').innerText = `Factorial: ${factorialNum}`;
        document.getElementById('factorial-result').classList.remove('d-none');
    }
}

//  Create a Fibonacci Series
const fibonacciSeries = () => {
    const n = document.getElementById('fibonacci-input').value;
    document.getElementById('fibonacci-result').classList.add('d-none');
    document.getElementById('fibonacci-error').innerText = '';

    if (n === '') {
        document.getElementById('fibonacci-error').innerText = 'Please enter a number!';
    }
    else if (n < 0) {
        document.getElementById('fibonacci-error').innerText = 'Please enter a valid number!';
    }
    else {
        let fibonacci = [0, 1];
        for (let i = 2; i <= n; i++) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        }
        document.getElementById('fibonacci').innerText = `Fibonacci Series: ${fibonacci}`;
        document.getElementById('fibonacci-result').classList.remove('d-none');
        
    }
}

// Prime Number Checker
const primeNumChecker = () => {
    const num = document.getElementById('prime-num-input').value;
    document.getElementById('prime-num-result').classList.add('d-none');
    let isPrime = true;

    if (num == 1) {
        document.getElementById('prime-num').innerText = '1 is neither prime nor composite number.';
        document.getElementById('prime-num-result').classList.remove('d-none');
    }
    else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            document.getElementById('prime-num').innerText = num + ' is a Prime Number';
            document.getElementById('prime-num-result').classList.remove('d-none');
        }
        else {
            document.getElementById('prime-num').innerText = num + ' not a Prime Number';
            document.getElementById('prime-num-result').classList.remove('d-none');
        }
    }
    else {
        document.getElementById('prime-num').innerText = 'The number is not a prime number.';
        document.getElementById('prime-num-result').classList.remove('d-none');
    }
        
}

// Swap variable
const Swap = () => {
    let a = document.getElementById('swap-input1').value;
    let b = document.getElementById('swap-input2').value;
    [a, b] = [b, a];
    document.getElementById('swap').innerText = `After Swap: a = ${a} & b = ${b}`;
    document.getElementById('swap-result').classList.remove('d-none');
}

// Random Number
const getRandomNum = () => {
    const min = document.getElementById('random-num-input1').value;
    const max = document.getElementById('random-num-input2').value;
    document.getElementById('random-num-error').innerText = '';
    document.getElementById('random-num-result').classList.add('d-none');
    
    if (max === '') {
        document.getElementById('random-num-error').innerText = 'Please enter a number!';
    }
    else if (max < min) {
        document.getElementById('random-num-error').innerText = 'Please enter a valid number!';
    }
    else {
        const randomNum = Math.ceil(Math.random() * (max - min + 1) + min);
        document.getElementById('random-num').innerText = 'Random Number : ' + randomNum;
        document.getElementById('random-num-result').classList.remove('d-none');
    }

}

//Find the largest element of an array
const getMaxNum = () => {
    document.getElementById('max-result').classList.add('d-none');
    document.getElementById('max-num-error').innerText = '';
    let arrayStrings = [];
    const arrayNums = [];
    const inputNum = document.getElementById('input-array-max').value;
    arrayStrings.push(inputNum)
    arrayStrings = arrayStrings.map(i => i.split(','));
    arrayStrings[0].forEach(Strings => {
        const arrayNum = parseInt(Strings)
        arrayNums.push(arrayNum)
    });
    let maxNum = arrayNums[0];
    arrayNums.forEach(num => { 
        if(num > maxNum){
            maxNum = num;
        }

    })
    if (isNaN(maxNum)) {
        document.getElementById('max-num-error').innerText = 'Please enter a valid number!';
    }
    else {
        document.getElementById('max-num').innerText = 'The Max or Largest Number is: ' + maxNum;
        document.getElementById('max-result').classList.remove('d-none');
    }
}

// Sum of all numbers in an array
const getSumOfNums = () => {
    document.getElementById('sum-result').classList.add('d-none');
    document.getElementById('sum-error').innerText = '';
    let arrayStrings = [];
    const arrayNums = [];
    const inputNum = document.getElementById('input-array-sum').value;
    arrayStrings.push(inputNum)
    arrayStrings = arrayStrings.map(i => i.split(','));
    arrayStrings[0].forEach(Strings => {
        const arrayNum = parseInt(Strings)
        arrayNums.push(arrayNum)
    });
    let sum = 0;
    arrayNums.forEach(num => { 
        sum = sum + num;

    })
    if (isNaN(sum)) {
        document.getElementById('sum-error').innerText = 'Please enter a valid number!';
    }
    else {
        document.getElementById('sum-num').innerText = 'The Sum of Numbers is: ' + sum;
        document.getElementById('sum-result').classList.remove('d-none');
    }
}

// Remove duplicate item from an array
const getUniqueNums = () => {
    document.getElementById('unique-result').classList.add('d-none');
    document.getElementById('unique-error').innerText = '';
    let arrayStrings = [];
    const arrayNums = [];
    const inputNum = document.getElementById('input-array-unique').value;
    arrayStrings.push(inputNum)
    arrayStrings = arrayStrings.map(i => i.split(','));
    arrayStrings[0].forEach(Strings => {
        const arrayNum = parseInt(Strings)
        arrayNums.push(arrayNum)
    });
    let unique = [];
    arrayNums.forEach(num => { 
        if(unique.indexOf(num) == -1){
            unique.push(num);
        }

    })
    if (unique == NaN) {
        document.getElementById('unique-error').innerText = 'Please enter a valid number!';
    }
    else {
        document.getElementById('unique-num').innerText = 'Unique Numbers is: ' + unique;
        document.getElementById('unique-result').classList.remove('d-none');
    }
}


// check if string is number
const isNumeric = speech => {
    return !isNaN(speech)
}

// Count the number of words in a string
const countWords = () => {
    const speech = document.getElementById('input-speech').value;
    document.getElementById('words-result').classList.add('d-none');
    document.getElementById('words-error').innerText = '';
    
    if (isNumeric(speech) == true) {
        document.getElementById('words-error').innerText = 'Please enter your paragraph!';
    }
    else {
        let count = 0; 
        for(let i = 0; i < speech.length; i++){
            const character = speech[i];
    
            if(character == ' ' && speech[i-1] != ' ') {
                count++;
            }
        }
        count++;
        document.getElementById('words-count').innerText = 'Number of Words: ' + count;
        document.getElementById('words-result').classList.remove('d-none');
    }
}

// Reverse a String
const reverseString = () => {
    document.getElementById('reverse-result').classList.add('d-none');
    document.getElementById('reverse-error').innerText = '';
    const string = document.getElementById('input-reverse').value;

    if (isNumeric(string) == true) {
        document.getElementById('reverse-error').innerText = 'Please enter your paragraph!';
    }
    else {
        let reverse = '';
        for(let i = 0; i < string.length; i++){
            const character = string[i];
            reverse = character + reverse;
        }
        document.getElementById('reverse-count').innerText = 'Reversed: ' + reverse;
        document.getElementById('reverse-result').classList.remove('d-none');
    }
}

// Kilometer To Meter
const kilometerToMeter = () => {
    const kilometer = document.getElementById('kilometer-input').value;
    document.getElementById('kilometer-error').innerText = '';
    document.getElementById('kilometer-result').classList.add('d-none')

    if (kilometer < 0) {
        document.getElementById('kilometer-error').innerText = `Kilometer can't be negative!`;
    }
    else if (kilometer === '') {
        document.getElementById('kilometer-error').innerText = 'Please enter your kilometer!';
    }
    else {
        const meter = kilometer * 1000;
        document.getElementById('kilometer').innerText = kilometer;
        document.getElementById('meter').innerText = meter;
        document.getElementById('kilometer-result').classList.remove('d-none');
    }
}

// Budget Calculator
const budgetCalculator = () => {
    document.getElementById('budget-error').innerText = '';
    document.getElementById('budget-result').classList.add('d-none')
    const watch = document.getElementById('watch-input').value;
    const phone = document.getElementById('phone-input').value;
    const laptop = document.getElementById('laptop-input').value;
    const sum = watch * 50 + phone * 100 + laptop * 500;
    if (watch == '' || phone == '' || laptop == '') {
        document.getElementById('budget-error').innerText = 'You have to give three values!';
    }
    else if (watch < 0 || phone < 0 || laptop < 0) {
        document.getElementById('budget-error').innerText = 'Negative values are not allowed!'
    }
    else {
        document.getElementById('budget').innerText = 'Total Budget : ' + sum;
        document.getElementById('budget-result').classList.remove('d-none');
    }
}


// Hotel Cost Calculator
const hotelCost = () => {
    document.getElementById('cost-error').innerText = '';
    document.getElementById('cost-result').classList.add('d-none')
    const day = document.getElementById('day-input').value;

    if (day == '') {
        document.getElementById('cost-error').innerText = 'Please enter your day!';
    }
    else if (day < 0) {
        document.getElementById('cost-error').innerText = `Day can't be negative!`;
    }
    else if (day <= 10) {
        document.getElementById('total-cost').innerText = 'Total Cost : ' + (day * 100);
        document.getElementById('cost-result').classList.remove('d-none');
    }
    else if (day <= 20) {
        const firstTenDays = 10 * 100;
        const remaining = day - 10;
        const nextTenDays = remaining * 80;
        document.getElementById('total-cost').innerText = 'Total Cost : ' + (firstTenDays + nextTenDays);
        document.getElementById('cost-result').classList.remove('d-none');
    }
    else {
        const firstTenDays = 10 * 100;
        const nextTenDays = 10 * 80;
        const remaining = day - 20;
        const lastDays = remaining * 50;
        document.getElementById('total-cost').innerText = 'Total Cost : ' + (firstTenDays + nextTenDays + lastDays);
        document.getElementById('cost-result').classList.remove('d-none');
    }
}

// Longest Friend Name
function megaFriend() {
    document.getElementById('longName-result').classList.add('d-none');
    document.getElementById('longName-error').innerText = '';
    let arrayOfNames = [];
    const names = document.getElementById('names-input').value;
    arrayOfNames.push(names);
    arrayOfNames = arrayOfNames.map(names => names.split(','));

    let longName = arrayOfNames[0][0];
    for (var i = 0; i < arrayOfNames[0].length; i++) {
        const name = arrayOfNames[0][i];
        if (longName.length < name.length) {
            longName = name;
        }
    }
    if (longName == '') {
        document.getElementById('longName-error').innerText = 'Please enter some names!';
    }
    else if (isNumeric(longName) == true) {
        document.getElementById('longName-error').innerText = `Names can't be number!`
    }
    else {
        document.getElementById('longName').innerText = 'The Longest Name is: ' + longName;
        document.getElementById('longName-result').classList.remove('d-none');
    }
}

