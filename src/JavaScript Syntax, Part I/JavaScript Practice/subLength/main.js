const subLength = (word, character) => {
   let occurrences = 0;
   const index = [];
   for (let i = 0; i < word.length ; i++) {
    (word[i] === character) && occurrences++;
    (word[i] === character) && index.push(i);
   } 
   
   if (occurrences === 2) {
     return  index[1] - index[0] + 1;
   } else {
     return 0;
   }
}