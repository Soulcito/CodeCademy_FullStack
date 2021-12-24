const groceries = (grocery) => {
   let word = '';
      
   for (let i = 0; i < grocery.length; i++) {
      if ( i === 0 ) {
        word = grocery[i].item;
      } else if ( i === grocery.length - 1 ) {
        word += ' and ' + grocery[i].item;
      } else {
        word += ', ' + grocery[i].item; 
      }
   }

   return word;

}


console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));
 
console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ));
 
console.log(groceries( [{item: 'Cheese Balls'}] ));
