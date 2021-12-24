const _ = {
  clamp(number, lower, upper) {
      const lowerClampedValue = Math.max(number, lower);
      const clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
  },
  inRange(number, start, end) {
      if ( end === undefined ) {
        end = start;
        start = 0;
      }
      if ( start > end ) {
        const temp = end;
        end = start;
        start = temp;
      }
      const isInRange = (number >= start && number < end);
      return isInRange;
  },
  words(string) {
     const words = string.split(' ');
     return words;
  },
  pad(string, length) {
     if (string.length >= length) {
       return string;
     }
     const totalPadding = length - string.length;
     const beginingPadding = Math.floor(totalPadding/2);
     const endingPadding = totalPadding - beginingPadding;

     return ' '.repeat(beginingPadding) + string + ' '.repeat(endingPadding);
  }
  ,has(object, key) {
    
    if (typeof object !== 'object') {
      return false;
    } else {
      return Object.keys(object).some(el => el === key);
    }
  }, invert(object){
     const objectInvert = {};
     Object.entries(object).forEach( el => objectInvert[el[1]] = el[0]);
     return objectInvert;
  }
}

// Do not write or modify code below this line.
module.exports = _;