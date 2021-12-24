const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:

const declineEverything = arr => {
  arr.forEach(politelyDecline);
}
declineEverything(veggies);

const acceptEverything = (arr) => {
  arr.forEach( val => console.log(`Ok, I guess I will eat some ${val}.`));
}

acceptEverything(veggies);
