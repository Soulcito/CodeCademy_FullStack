// Write your code here:

const vegan = (food) => food === 'plant';

const isTheDinnerVegan = (foods) => {
   return foods.every( el => vegan(el.source));   
}

// Feel free to comment out the code below to test your function

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false
