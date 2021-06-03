// Iteration 1: Names and Input
let hacker1 = 'Mike'
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = 'Sara'
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
     console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops
let driver = hacker1 
console.log(hacker1.split("").join(" ").toUpperCase());

let navigator = hacker2 
  console.log(hacker2.split("").reverse().join(""));

console.log(driver.toLowerCase());
console.log(navigator.toLowerCase());

if (driver.localeCompare(navigator) === 0) {
    console.log(`What?! You both have the same name?`)
} else if (driver.localeCompare(navigator) < navigator.localeCompare(driver)) {
  console.log(`${hacker1} goes first`)
} else {
  console.log(`Yo, ${hacker2} goes first definitely.`)
}