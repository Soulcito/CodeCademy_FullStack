// Write your code here:

const convertToBaby = (animals) => {
  const baby = [];
  for(let animal of animals) {
     baby.push(`baby ${animal}`);
  }
  return baby;
}

// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 
