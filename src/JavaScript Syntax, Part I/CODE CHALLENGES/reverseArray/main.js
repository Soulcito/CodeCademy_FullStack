// Write your code here:

const reverseArray = (item) => {
  const newArray = [];
  for (let i = item.length - 1; i >= 0; i--) {
     newArray.push(item[i]);
  }
  return newArray;
}

// When you're ready to test your code, uncomment the below and run:

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];


