// Write your code here:

const dogFactory = (name, breed, weight ) => {
  return {
    _name: name,
    _breed: breed, 
    _weight: weight,
    get name() { return this._name },
    get breed() { return this._breed },
    get weight() { return this._weight },
    set name(name) {
      if(typeof name === 'string') {
        this._name = name;
      } else {
        console.log('You must assign a string to name');
      }
    },
    set breed(breed) {
      if (typeof breed === 'string') {
        this._breed = breed;
      } else {
        console.log('You must assign a string to breed');
      }
    },
    set weight(weight) {
      if (typeof weight === 'number') {
        this._weight = weight;
      } else {
       console.log('You must assign a number to weight');
      }
    },
    bark () {
      return `ruff! ruff!`;
    },
    eatTooManyTreats() {
      this._weight++;
    }
 }
}