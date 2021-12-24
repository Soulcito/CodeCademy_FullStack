// Write your code here:

const capitalize = (word) => {
  return word.toUpperCase() + '!';
}

const shoutGreetings = (words) => {
   const newArr = words.map(capitalize);
   return newArr;
}

// Feel free to uncomment out the code below to test your function!

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
