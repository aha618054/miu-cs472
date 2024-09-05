// -------------------Exercise 2-------------------
const sum = (arr) => {
    let total = 0;
    arr.forEach(num => {
        if (num > 20) {
            total += num;
        }
    });
    return total;
};

const numbers = [10, 25, 30, 15, 40, 5];
console.log('Exercise 2: ' + sum(numbers));

// -------------------Exercise 3-------------------
const getNewArray = (arr) => arr.filter(str => str.length >= 5 && str.includes('a'));
const strings1 = ["apple", "banana", "pear", "kiwi", "grape", "avocado"];
console.log('Exercise 3: ' + getNewArray(strings1));

// -------------------Exercise 4-------------------
const getUpperCaseStrings = (arr) => {
    return arr.reduce((acc, str) => {
        if (str.length > 5) {
            acc.push(str.toUpperCase());
        }
        return acc;
    }, []);
};

// Example usage:
const strings2 = ["apple", "banana", "watermelon", "kiwi", "grape", "avocado"];
console.log('Exercise 4: ' + getUpperCaseStrings(strings2));  
