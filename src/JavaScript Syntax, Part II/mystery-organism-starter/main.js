// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
   
  return {
    specimenNum,
    dna,
    mutate() {
      const randomIdx = Math.floor(Math.random() * this.dna.length)
      let base = returnRandBase();
      
      while ( this.dna[randomIdx] === base ) {
         base = returnRandBase();
      }

      this.dna[randomIdx] = base;

      return this.dna;

    },
    compareDNA(pAequour){
      let common = 0;
      
      this.dna.forEach( (el,idx) => {
         if( el ===  pAequour.dna[idx]) common++;
      })

      console.log(`specimen #${this.specimenNum} and specimen #${pAequour.specimenNum} have ${Math.round((common/this.dna.length)*100)}% DNA in common`);
      
    },
    willLikelySurvive(){
      let survive = 0;
      this.dna.forEach( el => {
        if ( el === 'C' || el === 'G' ) survive++;
      });
      if ( Math.round((survive/this.dna.length)*100) >= 60 ){return true} else {return false};
    },
    complementStrand(){
      const newDna = [...this.dna];
      newDna.forEach( (el,idx) => {
         switch (el) {
           case 'A':
             newDna[idx] = 'T';
             break;
           case 'T':
             newDna[idx] = 'A';
             break;          
           case 'C':
             newDna[idx] = 'G';
             break;          
           case 'G':
             newDna[idx] = 'C';
             break;                   
         } 
      });
      return newDna;
    }
  }
}

const pAequourArray = [];
let pAequour;
let i = 0;

while( pAequourArray.length <= 30 ) {
  pAequour = pAequorFactory(i,mockUpStrand())
  if (pAequour.willLikelySurvive()) {
    pAequourArray.push(pAequour);
    i++;
  }
}

console.log(pAequourArray[0].dna);
console.log(pAequourArray[0].complementStrand());

